import "./Category.scss";
import tShirstLogo from "../../../assets/images/t-shirt.png"

const Category = () => {
    return (
        <section className="wrapper bg-white flex-column">
            <h6 className="p-4 mb-0">DANH MỤC</h6>
            <div className="divider"></div>
            <div className="d-flex flex-wrap">
                
                <div className="category-item">
                    <img src={tShirstLogo} alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>

                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
                <div className="category-item">
                    <img src="../../../assets/images/t-shirt.png" alt="" className="d-block w-100" />
                    <p><small>Thời trang nam</small></p>
                </div>
            </div>
        </section>

    );
}

export default Category;