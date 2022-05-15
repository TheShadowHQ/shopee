const MyProfile = () => {
    return (
        <>
            <div className="p-4 bg-white">
                <h5>Hồ sơ của tôi</h5>
                <p>Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
                <div className="divider"/>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Tên đăng nhập</label>
                    <div className="col-sm-10 d-flex align-items-center">
                        <span>nguyenhuuluan</span>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Tên</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10 d-flex align-items-center">
                        <span>nguyenhuuluan</span><a className="text-primary ms-3">Thay đổi</a>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Số điện thoại</label>
                    <div className="col-sm-10 d-flex align-items-center">
                        <span>*******89</span><a className="text-primary ms-3">Thay đổi</a>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Giới tính</label>
                    <div className="col-sm-10 d-flex">
                        <div className="d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="gender" id="Nam" checked/>
                            <label className="form-check-label ms-2" htmlFor="Nam" >
                                Nam
                            </label>
                        </div>
                        <div className="d-flex align-items-center mx-4">
                            <input className="form-check-input" type="radio" name="gender" id="Nữ"/>
                            <label className="form-check-label ms-2" htmlFor="Nữ" >
                                Nữ
                            </label>
                        </div>
                        <div className="d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="gender" id="Other"/>
                            <label className="form-check-label ms-2" htmlFor="Other" >
                                Khác
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row justify-content-center">
                    <button className="btn bg-primary w-25 text-white">Lưu</button>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
