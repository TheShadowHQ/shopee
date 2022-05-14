import "./Trending.scss";
import bag from "../../../assets/images/balo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Trending = () => {
    const trendings = [
        {
            text: "BAGS",
            remain: "1k+",
            image: bag
        },
        {
            text: "BAGS",
            remain: "1k+",
            image: bag
        },
        {
            text: "BAGS",
            remain: "1k+",
            image: bag
        },
        {
            text: "BAGS",
            remain: "1k+",
            image: bag
        },
        {
            text: "BAGS",
            remain: "1k+",
            image: bag
        }
    ];
    return (
        <section className="wrapper bg-white flex-column mt-3">
            <div className="p-4 mb-0 d-flex justify-content-between">
                <h6 className="text-muted">XU HƯỚNG TÌM KIẾM</h6>
                <small className="text-primary">
                    <FontAwesomeIcon icon="fa-sync-alt" className="me-1" />
                    Xem thêm
                </small>
            </div>
            <div className="divider"/>
            <div className="d-flex flex-wrap justify-content-between">
                {trendings.map((item, index) => {
                    return (
                        <div className="trendy-item" key={index}>
                            <div className="p-3">
                                <div>{item.text}</div>
                                <small className="text-muted">{item.remain} sản phẩm</small>
                            </div>
                            <div className="trendy-image-wrapper">
                                <img src={item.image} alt="" className="d-block w-100"/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Trending;
