import PageWrapper from '../components/PageWrapper';



interface DashboardPageProps {

}

const DashboardPage = (props: DashboardPageProps) => {
    return (
        <PageWrapper title="Dashboard" hideToolbar={true} >
            <div>Dashboard</div>
        </PageWrapper>
    )
}


DashboardPage.displayName = "DashboardPage"


export default DashboardPage;
