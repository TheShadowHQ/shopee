import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item" to="#">
          Tài khoản của tôi
        </li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-group-item text-primary" : "list-group-item text-muted"
          }
          to="/account/profile"
        >
          Hồ Sơ
        </NavLink>
        <li className="list-group-item text-muted">Ngân hàng</li>
        <li className="list-group-item text-muted">Địa chỉ</li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-group-item text-primary" : "list-group-item text-muted"
          }
          to="/account/change-password"
        >
          Đổi Mật Khẩu
        </NavLink>
      </ul>
    </>
  );
};

export default ProfileMenu;
