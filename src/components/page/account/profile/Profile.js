import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import MyProfile from "../../../ui/my-profile/My-profile";
import ProfileMenu from "../../../ui/profile-menu/Profile-menu";

const Profile = () => {
    return (
        <>
            <Header/>
            <section className="bg-gray header-spacing p-4" style={{marginTop: "116px"}}>
                <div className="wrapper">
                    <div className="d-flex w-100">
                        <div className="w-25 px-4">
                            <ProfileMenu/>
                        </div>
                        <div className="w-75">
                            <MyProfile/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Profile;
