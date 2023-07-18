import React from 'react'
import ModalWrapper from './ModalWrapper';



interface PrivacyModalProps {
    open: boolean
    confirmCallback: () => void
}

const PrivacyModal = ({ open, confirmCallback }: PrivacyModalProps) => {
    return (
        <ModalWrapper open={open} title="Privacy Policy" confirmCallback={confirmCallback}>
            Privacy policy will go here.
        </ModalWrapper>
    )
}



export default PrivacyModal;
