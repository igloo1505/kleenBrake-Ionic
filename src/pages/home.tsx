import PageWrapper from '../components/PageWrapper';
import LandingPageWrapper from '../components/landing/landingPageWrapper';



interface HomePageProps {

}

const HomePage = (props: HomePageProps) => {
    return (
        <PageWrapper title="Home" hideToolbar={true} >
            <LandingPageWrapper />
        </PageWrapper>
    )
}


HomePage.displayName = "HomePage"


export default HomePage;
