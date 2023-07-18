"use client"
import React, { ChangeEventHandler, useState } from 'react'
import UserSignupCard from './UserSignupCard';
import Button from '../../io/Button';
import { InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import { createNewUser } from '../../../state/actions/authActions';
import { useIonRouter } from '@ionic/react';
import GenericCard from '../../ui/Card';

const wrapperIds = {
    buyer: "buyer-wrapper-id",
    seller: "seller-wrapper-id"
}

interface SignUpCardProps {
    toggleSignup: (val: boolean) => void
}

export interface FormDataType {
    username: string
    password: string
    confirmPassword: string
    email: string
    age: string | number
    agreeToTerms: boolean,
    confirmAge: boolean
}


const SignUpCard = (props: SignUpCardProps) => {
    const router = useIonRouter()
    const [isSeller, setIsSeller] = useState(false)
    const [formData, setFormData] = useState<FormDataType>({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        age: 18,
        agreeToTerms: false,
        confirmAge: false,
    })

    const handleStringChange: ChangeEventHandler = (e) => {
        let newData: FormDataType = { ...formData }
        let target = e.target as HTMLInputElement
        if (isSeller) {
            newData = {
                ...newData,
                [target.name]: target.value
            }
        }
        if (!isSeller) {
            newData = {
                ...newData,
                [target.name]: target.value
            }
        }
        setFormData(newData)
    }
    const handleBooleanChange = (e: CheckboxChangeEvent) => {
        let newData: FormDataType = { ...formData }
        let target = e.target as HTMLInputElement
        newData = {
            ...newData,
            [target.name]: !newData[target.name as keyof FormDataType] as boolean
        }
        setFormData(newData)
    }

    const handleAge = (e: InputNumberValueChangeEvent) => {
        let newData: FormDataType = { ...formData }
        let validAge = e.value && e.value >= 18 && e.value <= 100
        newData = {
            ...newData,
            age: validAge && e.value ? e.value : 18
        }
        setFormData(newData)
    }

    const handleSignup = async () => {
        const data = formData
        const returnData = await createNewUser(data)
        const userId = returnData.newUser.id
        if (returnData.success && userId) {
            router.push(`/dashboard`)
        }
    }
    /* <div className={'shadow-lg overflow-hidden rounded-xl'}> */
    return (
        <GenericCard extraClasses="w-full" konsta={{ raised: true }}>
            <div className={'relative py-4 px-4'} style={{
                minWidth: "min(80vw, 640px)"
            }}>
                <UserSignupCard active={!isSeller} handleString={handleStringChange} handleBoolean={handleBooleanChange} formData={formData} handleAge={handleAge} wrapperId={wrapperIds.buyer} />
            </div>
            <div className={'w-full gap-4 grid grid-cols-2 mb-6'}>
                <Button label="Login" onClick={() => props.toggleSignup(false)} />
                <Button label="Sign Up" onClick={handleSignup} />
            </div>
        </GenericCard >
    )
}



export default SignUpCard;
