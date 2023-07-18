import {
    Segmented,
    SegmentedButton,
} from 'konsta/react';


interface SwitcherButtonsProps {
    signup: boolean
    setSignup: (val: boolean) => void
}

const SwitcherButtons = (props: SwitcherButtonsProps) => {
    return (
        <Segmented raised>
            <SegmentedButton
                active={props.signup}
                onClick={() => props.setSignup(true)}
            >
                Sign Up
            </SegmentedButton>
            <SegmentedButton
                active={!props.signup}
                onClick={() => props.setSignup(false)}
            >
                Register
            </SegmentedButton>
        </Segmented>
    )
}


SwitcherButtons.displayName = "SwitcherButtons"


export default SwitcherButtons;
