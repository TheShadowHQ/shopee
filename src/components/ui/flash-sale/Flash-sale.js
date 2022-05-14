import "./Flash-sale.scss";
import flash from "../../../assets/images/flash.png";
import saleItem1 from "../../../assets/images/sale-item-1.jpeg";
import saleFooter from "../../../assets/images/sale-footer.png";

const FlashSale = () => {
    const flashProducts = [
        {
            productImage: saleItem1,
            discountPercentage: 51,
            numberSold: 1
        },
        {
            productImage: saleItem1,
            discountPercentage: 51,
            numberSold: 1
        },
        {
            productImage: saleItem1,
            discountPercentage: 51,
            numberSold: 1
        },
        {
            productImage: saleItem1,
            discountPercentage: 51,
            numberSold: 1
        },
        {
            productImage: saleItem1,
            discountPercentage: 51,
            numberSold: 1
        },
        {
            productImage: saleItem1,
            discountPercentage: 51,
            numberSold: 1
        }
    ];
    return (
        <>
            <section className="wrapper bg-white flex-column mt-3 p-4">
                <div className="flash-sale-heading">
                    <img src={flash} alt="" className="d-block w-100"/>
                </div>
                <div className="d-flex justify-content-between">
                    {flashProducts.map((item, index) => {
                        return (
                            <div className="flash-sale-item-wrapper" key={index}>
                                <div className="flash-sale-item position-relative w-100">
                                    <img src={item.productImage} alt="" className="d-block w-100"/>
                                    <div className="flash-sale-number position-absolute top-0 end-0 text-center">
                                        <p className="mb-0 text-danger"><small>{item.discountPercentage}%</small></p>
                                        <p className="text-white">GIẢM</p>
                                    </div>
                                    <div className="flash-sale-footer position-absolute bottom-0">
                                        <img src={saleFooter} alt="" className="d-block w-100"/>
                                    </div>
                                </div>
                                <div className="progress w-100 mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: "20%"}}
                                         aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100"/>
                                    <span className="text-white ms-2">ĐÃ BÁN {item.numberSold}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default FlashSale;
    
