import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import store, { RootState } from '../../../state/store';
import TermsOfService from './TermsOfService';
import PrivacyModal from './Privacy';
import CallToActionModal from './CallToActionModal';
import { closeAllModals, openInitialModals } from '../../../state/slices/ui';
import "../../../styles/modals.css"

const connector = connect((state: RootState, props: any) => ({
    modals: state.UI.modals,
    authenticated: state.auth.authenticated,
    props: props
}))


interface ModalsProps {
    modals: RootState['UI']['modals']
    authenticated: boolean
}


const Modals = connector(({ modals, authenticated }: ModalsProps) => {
    const agreeToPrivacy = () => {
        console.log("Handle agreeToPolicy here")
        store.dispatch(closeAllModals())
    }

    const agreeToTOS = () => {
        console.log("Handle agreeToTOS here")
        store.dispatch(closeAllModals())
    }
    return (
        <>
            <TermsOfService open={modals.termsOfService} confirmCallback={agreeToTOS} />
            <PrivacyModal open={modals.privacy} confirmCallback={agreeToPrivacy} />
        </>
    )
})


Modals.displayName = "Modals"


export default Modals;
