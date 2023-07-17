import React from 'react'
import PageWrapper from '../components/PageWrapper';
import LoginPageHeader from '../components/authentication/LoginPageHeader';
import LoginCard from '../components/authentication/LoginCard';
import CallToLogin from '../components/authentication/CallToRegisterCard';



interface LoginPageProps {

}

const LoginPage = (props: LoginPageProps) => {
    return (
        <PageWrapper title="Login">
            <div className={'flex flex-col justify-center items-center'}>
                <LoginPageHeader />
                <div className={'w-fit mdlg:w-full max-w-screen-lg h-min grid-cols-1 grid-rows-2 mdlg:grid-cols-2 mdlg:grid-rows-1 grid place-items-center gap-4 mdlg:gap-6'}
                >
                    <LoginCard />
                    <CallToLogin />
                </div>
            </div>
        </PageWrapper>
    )
}


LoginPage.displayName = "LoginPage"


export default LoginPage;
