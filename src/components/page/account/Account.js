import ProfileMenu from "../../ui/profile-menu/Profile-menu";
import Layout from "../../shared/layout/Layout";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <Layout>
      <section className="bg-gray header-spacing p-4" style={{marginTop: "116px"}}>
        <div className="wrapper">
          <div className="d-flex w-100">
            <div className="w-25 px-4">
              <ProfileMenu />
            </div>
            <div className="w-75">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Account;