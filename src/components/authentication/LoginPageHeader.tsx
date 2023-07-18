import React from 'react'
import UnderlineGrowOnRender from '../ui/UnderlineGrowOnRender';
import store from '../../state/store';


const LoginPageHeader = ({ text }: { text: string }) => {
    return (
        <div className={'text-5xl my-6 w-full flex justify-center text-center'}>
            <div className={'w-fit'}>
                <div className={''}>
                    {text}
                    <UnderlineGrowOnRender id="loginPageHeaderUnderline" />
                </div>
            </div>
        </div>
    )
}

LoginPageHeader.displayName = "LoginPageHeader"


export default LoginPageHeader;
