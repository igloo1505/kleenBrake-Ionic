import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import TextInput from '../io/TextInput';
import GenericCard from '../ui/Card';
import Checkbox from '../io/Checkbox';
import { CheckboxChangeEvent } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { loginUser } from '../../state/actions/authActions';
import { useIonRouter } from '@ionic/react';
/* import { useRouter } from 'next/navigation'; */



interface loginCardData {
    email: string
    password: string
    rememberMe: boolean

}

interface CardProps {
    toggleSignup: (val: boolean) => void
}

const LoginCard = (props: CardProps) => {
    const router = useIonRouter()
    const [data, setData] = useState<loginCardData>({
        email: "",
        password: "",
        rememberMe: false
    })
    const handleChange: ChangeEventHandler = (e) => {
        const target = e.target as HTMLInputElement
        setData({
            ...data,
            [target.name]: target.value
        })
    }
    const handleBooleanChange = (e: CheckboxChangeEvent) => {
        console.log("e: ", e)
        const targetName = e.target.name as keyof loginCardData
        setData({
            ...data,
            [targetName]: !data[`${targetName}`]
        })
    }

    const handleSubmit = async () => {
        const r = await loginUser(data)
        if (r.success && r.user.id) {
            router.push(`/dashboard`)
        }
    }


    return (
        <GenericCard extraClasses="w-full" konsta={{ raised: true }}>
            <div className='px-4 py-3 flex flex-col gap-4 w-full'>
                <TextInput extraClasses="w-full" value={data.email} type="text" onChange={handleChange} name="email" label="Email" />
                <TextInput value={data.password} type="password" onChange={handleChange} name="password" label="Password" />
                <div className={'flex flex-row justify-between items-center w-full gap-4'}>
                    <Checkbox value={data.rememberMe} label="Remember Me" name="rememberMe" onChange={handleBooleanChange} />
                </div>
                <div className={'w-full grid grid-cols-2 gap-4'}>
                    <Button label="Sign Up" raised onClick={() => {
                        props.toggleSignup(true)
                        console.log("In toggleSignup?")
                    }} className={'whitespace-nowrap'} />
                    <Button label="Login" raised onClick={handleSubmit} />
                </div>
            </div>
        </GenericCard>
    )
}

LoginCard.displayName = "LoginCard"


export default LoginCard;
