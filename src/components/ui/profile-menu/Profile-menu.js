import { Link, NavLink } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item" to="#">
          Tài khoản của tôi
        </li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-group-item text-primary" : "list-group-item"
          }
          to="/account/profile"
        >
          Hồ sơ của tôi
        </NavLink>
        <li className="list-group-item">Ngân hàng</li>
        <li className="list-group-item">Địa chỉ</li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-group-item text-primary" : "list-group-item"
          }
          to="/account/change-password"
        >
          Đổi mật khẩu
        </NavLink>
      </ul>
    </>
  );
};

export default ProfileMenu;
