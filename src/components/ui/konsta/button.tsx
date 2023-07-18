import React from 'react'
import clsx from 'clsx';
import {
    Page,
    Navbar,
    NavbarBackLink,
    Button,
} from 'konsta/react';
import { Props as ButtonProps } from 'konsta/react/types/Button'

interface Props extends ButtonProps {
    className?: string
    label?: string
}


const KonstaButton = (props: Props) => {
    return (
        <Button clear={Boolean(props.clear)} rounded={Boolean(props.rounded)} outline={Boolean(props.outline)} className={clsx("", props.className && props.className)} {...props}>{props.label}</Button>
    )
}


KonstaButton.displayName = "KonstaButton"


export default KonstaButton;
