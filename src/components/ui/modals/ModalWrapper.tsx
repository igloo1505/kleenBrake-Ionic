"use client"
import { useClickOutside } from 'primereact/hooks'
import React, { useRef } from 'react'
import { closeAllModals } from '../../../state/slices/ui'
import store from '../../../state/store'
import GenericCard from '../Card'
import Button from '../../io/Button'


interface StylesInterface {
    container?: React.CSSProperties
    title?: React.CSSProperties
    buttonContainer?: React.CSSProperties
}

interface ModalWrapperProps {
    children: React.ReactNode
    open: boolean
    title?: string
    confirmCallback?: (confirm: boolean) => void
    confirmLabel?: string
    styles?: StylesInterface
}

const ModalWrapper = ({ children, open, title, styles, confirmCallback, confirmLabel }: ModalWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    useClickOutside(ref, () => {
        store.dispatch(closeAllModals())
    })
    let rows = []
    title && rows.push("")
    rows.push("1fr")
    confirmCallback && rows.push("auto")
    return (
        <>
            <GenericCard extraClasses="grid transition-all duration-500 z-[1000] fixed w-full border-[--surface-border] border" konsta={{ raised: true }}
                extraStyles={{
                    top: "2rem",
                    left: "50%",
                    /* transform: `translate(-50%, ${open ? "-50%" : "-200vh"})`, */
                    transform: `translate(-50%, ${open ? "0" : "-200vh"})`,
                    gridTemplateRows: `${rows.join(" ")}`,
                    minWidth: "min(80vw, 768px)",
                    maxWidth: "calc(100vw - 2rem)",
                    /* maxHeight: "calc(100vh - 6rem)", */
                    margin: 0,
                    ...(styles?.container && { ...styles.container })
                }}
                ref={ref}
            >
                {title && <div className={'w-full px-4 py-4 mb-4 text-2xl bg-[--primary-color] text-[--primary-color-text] '}
                    style={styles?.title ? styles.title : {}}
                >{title}</div>}
                {children}
                {confirmCallback && (
                    <div className={'w-full flex flex-row justify-end items-center'}
                        style={styles?.buttonContainer ? styles.buttonContainer : {}}
                    >
                        <Button role="button" onClick={() => confirmCallback(true)}>{confirmLabel ? confirmLabel : "Agree"}</Button>
                    </div>
                )
                }
            </GenericCard>
            <div className={'bg-[--backdrop-color] opacity-70 fixed h-full w-full top-0 left-0 transition-all duration-500 z-[999]'} style={{
                transform: `scale(${open ? 1 : 0})`
            }} />
        </>
    )
}



export default ModalWrapper;
