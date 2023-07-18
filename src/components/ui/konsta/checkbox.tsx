import React from 'react'
import {
    Checkbox,
} from 'konsta/react';
import { Props } from 'konsta/react/types/Checkbox'

interface KonstaCheckboxProps extends Props {
    onChange: (e: any) => void
}

const KonstaCheckbox = (props: KonstaCheckboxProps) => {
    return (
        <Checkbox
            /* component="div" */
            {...props}
        />
    )
}


KonstaCheckbox.displayName = "KonstaCheckbox"


export default KonstaCheckbox;
