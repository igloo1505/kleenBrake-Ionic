import React from 'react'

import { add, person, statsChart, home, logIn } from 'ionicons/icons';
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
import DashboardPage from '../../pages/dashboard';
import RequestServicePage from '../../pages/requestService';
import ProfilePage from '../../pages/profile';

const connector = connect((state: RootState, props: any) => ({
    isAuthenticated: state.auth.authenticated,
    props: props
}))




const AuthenticatedTabs = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/dashboard">
                    <DashboardPage />
                </Route>
                <Route exact path="/requestService">
                    <RequestServicePage />
                </Route>
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/dashboard">
                    <IonIcon aria-hidden="true" icon={statsChart} />
                    <IonLabel>Dashboard</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/requestService">
                    <IonIcon aria-hidden="true" icon={add} />
                    <IonLabel>Request</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/profile">
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
