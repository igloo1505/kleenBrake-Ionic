import heroImage from '../../../public/assets/development/heroPrimaryImage.jpg'


interface HeroCardRightProps {

}

const HeroCardRight = (props: HeroCardRightProps) => {
    return (
        <img
            src={heroImage}
            alt="Panty Platform Image"
            className={'max-h-[300px] w-auto rounded-lg my-4'}
        />
    )
}



export default HeroCardRight;
