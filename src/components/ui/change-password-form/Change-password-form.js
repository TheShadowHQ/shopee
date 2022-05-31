import { useState, useEffect } from "react";
import CustomToast from "../../toasts/Custom-toast";
import axios from "axios";

const ChangePasswordForm = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsNewPasswordValid(newPassword.length > 6);
    setIsConfirmPasswordValid(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  const changePassword = () => {
    setError(null);
    axios
      .put(
        "https://shopee-nodejs.herokuapp.com/api/user/change-password",
        {
          password: password,
          newPassword: newPassword,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => {
        setError({
          title: "Change password failed",
          message: err.response.data,
        });
      });
  };

  return (
    <>
      {error && (
        <CustomToast
          title={error.title}
          message={error.message}
          onClose={() => setError(null)}
        />
      )}
      <div className="p-4 bg-white">
        <h5>Đổi Mật Khẩu</h5>
        <p>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </p>
        <div className="divider" />
        <div className="my-3 row">
          <label className="col-3 col-form-label">Mật khẩu hiện tại</label>
          <div className="col-8">
            <input
              type="password"
              className="form-control"
              id="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-3 col-form-label">Mật khẩu mới</label>
          <div className="col-8">
            <input
              type="password"
              className={`form-control ${
                isNewPasswordValid ? "is-valid" : "is-invalid"
              }`}
              id="new-password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="invalid-feedback">
              Password must have at least 6 characters
            </div>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-3 col-form-label">Xác nhận mật khẩu</label>
          <div className="col-8">
            <input
              type="password"
              className={`form-control ${
                isConfirmPasswordValid ? "is-valid" : "is-invalid"
              }`}
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="invalid-feedback">
              Confirm password does not match new password
            </div>
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <button
            className="btn bg-primary w-25 text-white"
            disabled={!isConfirmPasswordValid || !isNewPasswordValid}
            onClick={changePassword}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
