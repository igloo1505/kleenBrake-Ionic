import PageWrapper from '../components/PageWrapper';



interface RequestServicePageProps {

}

const RequestServicePage = (props: RequestServicePageProps) => {
    return (
        <PageWrapper title="RequestService" hideToolbar={true} >
            <div>RequestService</div>
        </PageWrapper>
    )
}


RequestServicePage.displayName = "RequestServicePage"


export default RequestServicePage;
