const ChangePasswordForm = () => {
  return (
    <>
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
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-3 col-form-label">Mật khẩu mới</label>
          <div className="col-8">
            <input type="password" className="form-control" id="new-password" />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-3 col-form-label">Xác nhận mật khẩu</label>
          <div className="col-8">
            <input
              type="password"
              className="form-control"
              id="confirm-password"
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <button className="btn bg-primary w-25 text-white">Xác nhận</button>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
