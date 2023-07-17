import React from 'react'
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/soho-dark/theme.css';
import '../styles/global.css'


/* TODO: Enable this again once tailwind is working. */
import LoadingIndicator from '../components/ui/loadingIndicator';
/* <LoadingIndicator /> */


interface PageWrapperProps {
    children: React.ReactNode
    title: string
}

const PageWrapper = (props: PageWrapperProps) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{props.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            {props.children}
        </IonPage>
    )
}


PageWrapper.displayName = "PageWrapper"


export default PageWrapper;
