"use client"
import React, { useEffect, useState } from 'react'
import { roleTypes } from '../../state/types/AuthTypes'
import Link from 'next/link'
import { connect } from 'react-redux';
import { RootState } from '../../state/store';
import { InitialAuthStateType } from '../../state/initial/authState';
import { logoutUser } from '../../state/actions/authActions';
import { ROLE } from '@prisma/client';
import { arrayOverlap } from '#/utils/validation';

const connector = connect((state: RootState, props: any) => ({
    auth: state.auth,
    props: props
}))

export interface NavbarButtonType {
    text: string,
    href: string | ((id: string | number) => string)
    authed: boolean | "both"
    roles?: roleTypes[] | undefined
}

export const shouldDisplay = (button: NavbarButtonType, authenticated: boolean, user: InitialAuthStateType['user']) => {
    const protectedRoles: ROLE[] = ["EMPLOYEE", "ADMIN", "REP"]
    if (authenticated && button.roles && arrayOverlap(protectedRoles, button.roles)) {
        return user?.role ? button.roles.indexOf(user.role) >= 0 : false
    }
    if (button.authed === "both" || button.authed === authenticated) {
        return true
    }
    /* const _protectedRoles = () => { */
    /*     let v = true */
    /*     if (!button.roles) { */
    /*         return true */
    /*     } */
    /*     button.roles.forEach((r) => { */
    /*         if (protectedRoles.indexOf(r) > -1) { */
    /*             v = false */
    /*         } */
    /*     }) */
    /*     return v */
    /* } */
    /* const isProtected = _protectedRoles() */
    return false
    /* return (button.authed === "both" || button.authed === authenticated) && (isProtected) && (!isProtected || !button.roles || (user?.role && button.roles.indexOf(user?.role) > -1)) || false */
}


const NavbarButton = connector(({ button, auth: { authenticated, user } }: { button: NavbarButtonType, auth: InitialAuthStateType }) => {
    const [display, setDisplay] = useState(false)
    useEffect(() => setDisplay(shouldDisplay(button, authenticated, user)), [authenticated, user])
    if (!display) {
        return null
    }
    return (
        <Link href={typeof button.href === "string" ? button.href : button.href(user?.id || "")}>{button.text}</Link>
    )

})


export const LogoutButton = connector(({ auth: { authenticated } }: { auth: InitialAuthStateType }) => {
    const [display, setDisplay] = useState(false)
    useEffect(() => setDisplay(authenticated), [authenticated])
    if (!display) {
        return null
    }
    return (
        <a role="button" onClick={logoutUser}>{'Log Out'}</a>
    )
})


export default NavbarButton;
