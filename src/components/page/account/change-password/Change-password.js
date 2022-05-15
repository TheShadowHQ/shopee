import Header from "../../../shared/header/Header";
import Footer from "../../../shared/footer/Footer";
import ProfileMenu from "../../../ui/profile-menu/Profile-menu";
import ChangePasswordForm from "../../../ui/change-password-form/Change-password-form";

const ChangePassword = () => {
  return (
    <>
      <Header />
      <section className="bg-gray header-spacing p-4" style={{marginTop: "116px"}}>
        <div className="wrapper">
          <div className="d-flex w-100">
            <div className="w-25 px-4">
              <ProfileMenu />
            </div>
            <div className="w-75">
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ChangePassword;
