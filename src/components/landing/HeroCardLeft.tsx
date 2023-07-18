import React from 'react'
import LeftBottomUnderlinedText from '../ui/LeftBottomUnderlinedText';
import Button from '../io/Button';
import Link from '../../components/ui/konsta/RouterLink';

import { connect } from 'react-redux';
import { RootState } from '../../state/store';
import { AppDataType } from '../../state/initial/appData';
import HeroCardRight from './HeroCardRight';

const connector = connect((state: RootState, props: any) => ({
    appData: state.UI.appData,
    props: props
}))


interface HeroCardLeftProps {
    appData: AppDataType
}


const HeroCardLeft = connector(({ appData }: HeroCardLeftProps) => {
    return (
        <div className={'w-fit h-full flex flex-col justify-start items-start py-4'}>
            <div className={'w-full text-center text-4xl font-bold'}>
                {appData.landing.heroMainTitle}
                <div className={'w-full h-[3px] bg-[--primary-color] mt-2'} />
            </div>
            {appData.landing.heroSubTitle && <div className={'w-full pl-3 my-2 text-lg text-center'}>
                {appData.landing.heroSubTitle}
            </div>}
            <div className={'w-full flex justify-center items-center'}>
                <HeroCardRight />
            </div>
            {appData.landing.heroCardBody && <div className={'w-full mt-2 text-center'}>
                {appData.landing.heroCardBody}
            </div>}
        </div>
    )
})

HeroCardLeft.displayName = "HeroCardLeft"

export default HeroCardLeft;
