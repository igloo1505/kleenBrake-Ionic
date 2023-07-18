import React from 'react'
import ModalWrapper from './ModalWrapper';
import KonstaModal from '../konsta/KonstaModal';


interface TermsOfServiceProps {
    open: boolean
    confirmCallback: () => void
}

const TermsOfService = ({ open, confirmCallback }: TermsOfServiceProps) => {
    return (
        <ModalWrapper open={open} title="Terms of Service" confirmCallback={confirmCallback}>
            Terms of Service will go here.
        </ModalWrapper>
    )
}



export default TermsOfService;
