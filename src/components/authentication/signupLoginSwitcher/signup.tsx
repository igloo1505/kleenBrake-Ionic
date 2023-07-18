import React from 'react'
import LoginPageHeader from '../LoginPageHeader'
import SignUpCard from '../signup/Card'



interface RegisterAccountStateProps {
    toggleSignup: (val: boolean) => void
}

const SignupAccountState = (props: RegisterAccountStateProps) => {
    return (
        <div className={'flex flex-col justify-center items-center px-6'}>
            <LoginPageHeader text={"Register"} />
            <div className={'w-full max-w-[min(100%,640px)] h-min grid-cols-1 grid place-items-center gap-4 mdlg:gap-6'}
            >
                <SignUpCard toggleSignup={props.toggleSignup} />
            </div>
        </div>
    )
}


SignupAccountState.displayName = "SignupAccountState"


export default SignupAccountState;
