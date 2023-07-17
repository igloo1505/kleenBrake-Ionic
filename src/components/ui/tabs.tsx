import React from 'react'

import Tab1 from '../../pages/Tab1';
import Tab2 from '../../pages/Tab2';
import Tab3 from '../../pages/Tab3';
import { ellipse, square, triangle, add, person, statsChart, home, logIn } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';

interface TabsProps {
    isAuthenticated: boolean
}

import { RootState } from '../../state/store';
import { connect } from 'react-redux';
import LoginPage from '../../pages/login';
import HomePage from '../../pages/home';

const connector = connect((state: RootState, props: any) => ({
    isAuthenticated: state.auth.authenticated,
    props: props
}))


const IonRouter = () => {
    return (
        <IonRouterOutlet>
            <Route exact path="/tab1">
                <Tab1 />
            </Route>
            <Route exact path="/tab2">
                <Tab2 />
            </Route>
            <Route path="/tab3">
                <Tab3 />
            </Route>
            <Route exact path="/">
                <Redirect to="/tab1" />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/home">
                <HomePage />
            </Route>
        </IonRouterOutlet>
    )

}


const AuthenticatedTabs = () => {
    return (
        <IonTabs>
            <IonRouter />
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon aria-hidden="true" icon={statsChart} />
                    <IonLabel>Dashboard</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon aria-hidden="true" icon={add} />
                    <IonLabel>Request</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon aria-hidden="true" icon={person} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

const UnauthenticatedTabs = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/home">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon aria-hidden="true" icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="login" href="/login">
                    <IonIcon aria-hidden="true" icon={logIn} />
                    <IonLabel>Login</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

const Tabs = connector((props: TabsProps) => {
    return props.isAuthenticated ? <AuthenticatedTabs /> : <UnauthenticatedTabs />
})


Tabs.displayName = "Tabs"


export default Tabs;
