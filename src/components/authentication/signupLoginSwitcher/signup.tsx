import React from 'react'
import LoginPageHeader from '../../../components/authentication/LoginPageHeader';
import LoginCard from '../../../components/authentication/LoginCard';
import CallToLogin from '../../../components/authentication/CallToRegisterCard';


interface SignupStateProps {

}

const SignupState = (props: SignupStateProps) => {
    return (
        <div className={'flex flex-col justify-center items-center px-6'}>
            <LoginPageHeader />
            <div className={'w-full max-w-[min(100%,640px)] h-min grid-cols-1 grid place-items-center gap-4 mdlg:gap-6'}
            >
                <LoginCard />
            </div>
        </div>
    )
}


SignupState.displayName = "SignupState"


export default SignupState;
