import HeroCardLeft from './HeroCardLeft';



interface LandingPageWrapperProps {

}

const LandingPageWrapper = (props: LandingPageWrapperProps) => {
    return (
        <div className={'w-full h-fit px-8 flex flex-col justify-start items-center'}>
            <HeroCardLeft />
        </div>
    )
}


LandingPageWrapper.displayName = "LandingPageWrapper"


export default LandingPageWrapper;
