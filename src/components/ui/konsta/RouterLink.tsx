import { Link as LinkyLink } from 'konsta/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


interface RouterLinkProps {
    href: string
    children: React.ReactNode
}

const Link = (props: RouterLinkProps) => {
    return (
        <LinkyLink href={props.href} component={RouterLink}>
            {props.children}
        </LinkyLink>
    )
}


Link.displayName = "Link"


export default Link;
