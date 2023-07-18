import React from 'react'
import KonstaCheckbox from '../ui/konsta/checkbox';



interface CheckboxProps {
    onChange: (e: any) => void
    label?: string
    value: boolean
    name: string
}

const CheckboxWithLabel = (props: CheckboxProps) => {
    return (
        <div className={'flex flex-row items-center justify-center'}>
            <KonstaCheckbox checked={props.value} onChange={props.onChange} name={props.name} />
            <div className="ml-2">{props.label || ""}</div>
        </div>
    )
}



export default CheckboxWithLabel;
