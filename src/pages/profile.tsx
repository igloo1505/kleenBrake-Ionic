import PageWrapper from '../components/PageWrapper';



interface ProfilePageProps {

}

const ProfilePage = (props: ProfilePageProps) => {
    return (
        <PageWrapper title="Profile" hideToolbar={true} >
            <div>Profile</div>
        </PageWrapper>
    )
}


ProfilePage.displayName = "ProfilePage"


export default ProfilePage;
