const themeRootPath = "/themes"

import { RootState } from '../state/store';
import { connect } from 'react-redux';

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkMode,
    uiState: state.UI,
    props: props
}))

interface ProductionThemeSourcingProps {
    darkMode: boolean
    uiState: RootState['UI']
}


const ProductionThemeSourcing = connector((props: ProductionThemeSourcingProps) => {
    let beDark = props.darkMode
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        beDark = true
    }
    console.log(props.uiState)
    return (
        <head>
            <link rel="stylesheet" href={`${themeRootPath}/soho-dark/theme.css`} media={beDark ? "" : "none"} id={props.uiState.lightId || "light-theme-id"} />
            <link rel="stylesheet" href={`${themeRootPath}/soho-light/theme.css`} media={!beDark ? "" : "none"} id={props.uiState.darkId || "dark-theme-id"} />
        </head>
    )
})



export default ProductionThemeSourcing;
