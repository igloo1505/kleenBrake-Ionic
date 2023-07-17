import React from 'react'
import PageWrapper from '../components/PageWrapper';



interface HomePageProps {

}

const HomePage = (props: HomePageProps) => {
    return (
        <PageWrapper title="Home">
            Home Goes here...
        </PageWrapper>
    )
}


HomePage.displayName = "HomePage"


export default HomePage;
