import React, { useState } from 'react'
import SignupState from './signup';


interface SignupLoginSwitcherProps {

}

const SignupLoginSwitcher = (props: SignupLoginSwitcherProps) => {
    const [signUp, setSignUp] = useState(true)
    return (
        <div>
            <SignupState />
        </div>
    )
}


SignupLoginSwitcher.displayName = "SignupLoginSwitcher"


export default SignupLoginSwitcher;
