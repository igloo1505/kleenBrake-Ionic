"use client"
import React, { FormEventHandler, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { Dashboard, User } from '@prisma/client';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import Button from '@/io/Button';
import { formatHost } from '#/utils/formatting';
import axios from 'axios';
import { defaultAxiosConfig } from '#/state/types/NetworkTypes';
import store from '#/state/store';
import { setScreenMessage, showToast } from '#/state/slices/ui';


interface Props {
    open: boolean
    setIsOpen: (v: boolean) => void
    quantity: number
    user: (User & { dashboard: Dashboard })
}

interface CheckoutDataType {
    message: string | null
    email: string
}

const CheckoutModal = ({ open, setIsOpen, user, quantity }: Props) => {
    const stripe = useStripe();
    const host = formatHost(window.location.host)
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false)
    const [checkoutData, setCheckoutData] = useState<CheckoutDataType>({
        message: null,
        email: user.email || ""
    })
    const setupStripe = async () => {
        if (!stripe || isLoading) {
            return;
        }
        setIsLoading(true)
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
        if (!clientSecret) {
            setIsLoading(false)
            return;
        }
        const res = await stripe.retrievePaymentIntent(clientSecret)
        if (res.paymentIntent) {
            switch (res.paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        }
        setIsLoading(false)
    }

    useEffect(() => {
        setupStripe()
    }, [stripe])
    const [show, setShow] = useState(open)
    useEffect(() => {
        if (typeof window === "undefined") return;
        setShow(open)
    }, [open])
    if (!show) return null;
    const setMessage = (m: string) => {
        setCheckoutData({
            ...checkoutData,
            message: m
        })
    }


    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);
        const res = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${host}`,

            },
            redirect: "if_required"
        });
        const error = res.error
        if (error) {
            if ((error.type === "card_error" || error.type === "validation_error") && error.message) {
                setMessage(error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        }
        if (!error) {
            setIsOpen(false)
            store.dispatch(showToast({
                isOpen: true,
                timeout: 5000,
                content: `Success! You've successfully purchased ${quantity} loads of laundry.`
            }))
            await axios.post("/api/service/save", null, defaultAxiosConfig)
            if (window.location.pathname === "/purchaseService") {
                setTimeout(() => {
                    window.location.pathname = "/dashboard"
                }, 5000)
            }
        }
        setIsLoading(false);
    };

    const paymentElementOptions: StripePaymentElementOptions = {
        defaultValues: {
            billingDetails: {
                name: user.nameOnAccount as string,
                email: user.email,
            }
        },
        layout: "auto"
    }

    return createPortal(
        <>
            <div className={'absolute top-[40px] left-[50%] -translate-x-[50%] bg-[--surface-card] rounded-xl border border-[--surface-border] w-full max-w-[calc(100vw-6rem)] z-[999] px-8 py-6'}>
                <form id="payment-form" onSubmit={handleSubmit}>
                    <LinkAuthenticationElement
                        id="link-authentication-element"
                        onChange={(e) => {
                            /// @ts-ignore
                            const target = e.target as HTMLInputElement
                            setCheckoutData({
                                ...checkoutData,
                                email: target.value
                            })
                        }}
                    />
                    <PaymentElement id="payment-element" options={paymentElementOptions} />
                    <div className={'w-full flex flex-row justify-end items-center mt-6'}>
                        <Button label="Pay now" disabled={isLoading || !stripe || !elements} id="submit" />
                    </div>
                    {/* Show any error or success messages */}
                    {checkoutData.message && <div id="payment-message">{checkoutData.message}</div>}
                </form>
            </div>
            <div className={'w-screen h-screen fixed top-0 left-0 bg-gray-800 bg-opacity-80 z-[998]'} onClick={() => setIsOpen(false)} />
        </>,
        document.body
    )
}


CheckoutModal.displayName = "CheckoutForm"


export default CheckoutModal;
