import React, { useState } from 'react'
import RegisterState from './register';
import SignupAccountState from './signup';


interface SignupLoginSwitcherProps {

}

const SignupLoginSwitcher = (props: SignupLoginSwitcherProps) => {
    const [signUp, setSignUp] = useState(false)
    return (
        <div>
            {
                signUp ? <SignupAccountState toggleSignup={(v: boolean) => setSignUp(v)} /> : <RegisterState toggleSignup={(v: boolean) => setSignUp(v)} />
            }
        </div>
    )
}


SignupLoginSwitcher.displayName = "SignupLoginSwitcher"


export default SignupLoginSwitcher;
