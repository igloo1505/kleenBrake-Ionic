import React from 'react'
import { Dialog } from 'konsta/react';
import { Props } from 'konsta/react/types/Dialog'

interface KonstaModalProps {
    title: string
    open: boolean
    allowDismiss?: boolean
    konsta?: Props
    children: React.ReactNode
}

const KonstaModal = (props: KonstaModalProps) => {
    const konsta = props.konsta || {}

    return (
        <Dialog
            opened={props.open}
            content={props.children}
            title={props.title}
            {...konsta}
        />
    )
}


KonstaModal.displayName = "KonstaModal"


export default KonstaModal;
