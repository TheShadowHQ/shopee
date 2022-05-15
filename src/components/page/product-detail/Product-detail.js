import ProductData from "../../../data/Product-data";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const productId = +params.productId;
    const productItems = ProductData;
    const selectedProduct = productItems.find(item => item.id === productId);


    return (
        <>
            <h5>This is product detail</h5>
        </>
    )
};

export default ProductDetail;

