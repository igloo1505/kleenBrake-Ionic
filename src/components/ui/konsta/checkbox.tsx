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
            colors={{
                borderIos: "var(--primary-color)",
                borderMaterial: "var(--primary-color)"
            }}
            {...props}
        />
    )
}


KonstaCheckbox.displayName = "KonstaCheckbox"


export default KonstaCheckbox;
