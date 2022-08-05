import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import addCar from "../../images/add-car.png"
import DetailProductPage from "../DetailProductPage/DetailProductPage";

export default function CartProducts(props) {
    const { id, imagem, nome, descricao, referencia, quantidade } = props.product
    const { subCountProduct } = props
    const data = useContext(GlobalContext);
    const removeFromCart = data.removeFromCart
    const addCountProduct = data.addCountProduct
    const removeCountProduct = data.removeCountProduct
    let navigate = useNavigate();

    return (
        <div key={id} id="cartProducts">
            <div className="product-container-cart-products">
                <div className="container-img-detail-cart-products">
                    <img className="image-product-cart-products" src={imagem} alt="caneca" />
                    <div className="detail-container-product-cart-products">
                        <div className="detail-product-cart-products">{nome}</div>
                        <div className="detail-product-sector-1">{descricao}</div>
                        <div className="detail-product-sector-1">{referencia} </div>
                    </div>
                </div>
                <div className="container-btn-product-cart-products">
                    <div className="counter-product-cart-page">
                        <div onClick={() => removeCountProduct(id)} className="modal-counter-add">-</div>
                        <div className="modal-counter-num">{quantidade}</div>
                        <div onClick={() => addCountProduct(id)} className="modal-counter-add">+</div>
                    </div>
                    <div onClick={() => removeFromCart(props.product)} className="btn-product-sector-1">
                        <div className="add-to-car-btn-text">Remover</div>
                    </div>


                </div>
            </div>
        </div>
    )
}