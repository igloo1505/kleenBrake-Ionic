import React from 'react'
import PageWrapper from '../components/PageWrapper';
import SignupLoginSwitcher from '../components/authentication/signupLoginSwitcher/switcher';



interface LoginPageProps {

}

const LoginPage = (props: LoginPageProps) => {
    return (
        <PageWrapper title="Login" hideToolbar>
            <SignupLoginSwitcher />
        </PageWrapper>
    )
}


LoginPage.displayName = "LoginPage"


export default LoginPage;
