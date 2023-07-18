import React from 'react'
import {
    Page,
    Navbar,
    NavbarBackLink,
    Card,
    BlockTitle,
    List,
    ListItem,
    Link,
    Button,
} from 'konsta/react';
import { Props } from 'konsta/react/types/Card'


interface CardProps {
    title?: string,
    children: React.ReactNode,
    className?: string,
    additionalParams?: object
    extraClasses?: string
    extraStyles?: object
    konsta?: Props
    ref?: React.Ref<any>
}

const GenericCard = (props: CardProps) => {
    let params: { className?: string, ref?: React.Ref<any> } = {}
    props.additionalParams && (params = { ...props.additionalParams })
    params['className'] = props.className || `w-fit flex flex-col ${props.extraClasses || ""}`
    if (props.ref) {
        params['ref'] = props.ref
    }
    const konstaprops = props.konsta || {}
    return (
        <Card colors={{
            bgIos: "bg-ios-light-surface-1 dark:bg-ios-dark-surface-1",
            textIos: "",
            bgMaterial: "bg-md-light-surface-1 dark:bg-md-dark-surface-1",
            textMaterial: "text-md-light-on-surface dark:text-md-dark-on-surface"

        }}
            {...params} {...konstaprops} style={{
                ...(props.extraStyles && { ...props.extraStyles })
            }}>{props.children}</Card>
    )
}



export default GenericCard;
