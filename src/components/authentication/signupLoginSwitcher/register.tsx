import React from 'react'
import LoginPageHeader from '../../../components/authentication/LoginPageHeader';
import LoginCard from '../../../components/authentication/LoginCard';
import CallToLogin from '../../../components/authentication/CallToRegisterCard';
import store from '../../../state/store';


interface SignupStateProps {
    toggleSignup: (val: boolean) => void
}

const RegisterState = (props: SignupStateProps) => {
    const appData = store.getState()?.UI?.appData
    return (
        <div className={'flex flex-col justify-center items-center px-6'}>
            <LoginPageHeader text={appData.authentication.loginPageHeading} />
            <div className={'w-full max-w-[min(100%,640px)] h-min grid-cols-1 grid place-items-center gap-4 mdlg:gap-6'}
            >
                <LoginCard toggleSignup={props.toggleSignup} />
            </div>
        </div>
    )
}


RegisterState.displayName = "RegisterState"


export default RegisterState;
