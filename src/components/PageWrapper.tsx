import React, { useEffect, useState } from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoadingIndicator from '../components/ui/loadingIndicator';
import PrimeReact from 'primereact/api';

import { RootState } from '../state/store';
import { connect } from 'react-redux';
import ProductionThemeSourcing from '../styles/ThemeSwitching';

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkMode,
    props: props
}))

interface PageWrapperProps {
    children: React.ReactNode
    title: string
    hideToolbar?: boolean
    darkMode: boolean
}

const PageWrapper = connector((props: PageWrapperProps) => {

    return (
        <>
            <ProductionThemeSourcing />
            <IonPage>
                {!props.hideToolbar && <IonHeader>
                    <IonToolbar>
                        <IonTitle>{props.title}</IonTitle>
                    </IonToolbar>
                </IonHeader>}
                <LoadingIndicator />
                {props.children}
            </IonPage>
        </>
    )
})


PageWrapper.displayName = "PageWrapper"


export default PageWrapper;
