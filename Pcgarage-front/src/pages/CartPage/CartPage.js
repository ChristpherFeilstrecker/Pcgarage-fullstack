import { ArrowBackIos } from "@material-ui/icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../components/constants/BaseURL";
import GlobalContext from "../../components/global/globalContext";
//import GlobalState from "../../components/global/globalState";
import useForm from "../../components/hooks/useForm";
import { SubTitleTagB } from "../../StyledGlobal";
import CartProducts from "./CartProducts";
import "./StyledCartPage.css";


export default function CartPage(props) {
    const data = useContext(GlobalContext);
    const cart = data.cart
    const setCart = data.setCart
    let pedido = data.pedido;
    const setPedido = data.setPedido;

    const useRequestData = (url) => {
        const [data, setData] = useState();
        let urlLink = url

        useEffect((url) => {
            axios
                .get(urlLink)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
        }, [url, urlLink]);

        return data;

    }

    const parametros = useRequestData(BASE_URL + "/informacoes")

    let navigate = useNavigate();

    const listProducts = (() => {

        const Products = cart
            .map((product) => {

                return <CartProducts key={product.id} product={product} />
            })

        return Products
    })

    console.log("pedido", pedido)
    // let [produtos, setProdutos] = useState("")
    /*
        useEffect(() => {
            if(Array.isArray(cart)){
              for (let prod of cart) {
                let prods = `" => Produto solicitado:" id=${prod.id} nome=${prod.nome} qtd=${prod.quantidade}`;
                let newMessage = prods + produtos
                setProdutos(newMessage)
                console.log("pedido", produtos)
            }  
            }
            
        }, [])
        */

    /*
    const listProductToEmail = async e => {
        e.preventDefault()
        let novoPedido = produtos
        for (let prod of cart) {
            let prods = `" => Produto solicitado:" id=${prod.id} nome=${prod.nome} qtd=${prod.quantidade}`;
            let newMessage = prods + novoPedido
            setProdutos(newMessage)
            console.log("pedido", produtos)
        }

    }
    */

    const [form, onChange, clear] = useForm({ name: "", email: "", celPhone: "", phone: "", message: "" })

    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)

        clear()
    }

    //   const removeFromCart = (item)=>{
    //      const index = cart.findIndex((i) => item.id === i.id)
    //       cart.splice(index,1)
    //  }

    //onSubmit={onChangeInputs}



    //action="https://api.staticforms.xyz/submit" method="POST" 
    //<input type="hidden" name="accessKey" value="db9a9f30-9b38-4e8f-ab57-c41aa602fc62" />
    //<input type="hidden" name="redirectTo" value="http://localhost:3000/carrinho" />
    return (
        <div className="cart-page">
            <div className="my-car-container-cart-page">
                <div className="title-my-car-cart-page">MEU CARRINHO</div>
                <div className="products-container-cart-page">{cart.length > 0 ?
                    (<div>
                        {listProducts()}
                        <button className="btn-drain-products-cart-page" onClick={() => setCart([])}>Esvaziar carrinho</button>
                    </div>

                    )
                    : (<div className="empt-car">Carinho vaziu</div>)}</div>
            </div>

            <div className="budget-container-cart-page">
                <form className="form-container-box-cart-page" >
                    <div className="title-contact-section-2">
                        <SubTitleTagB className="title-word-contact-section-2">Pedido de Orçamento</SubTitleTagB>
                    </div>
                    <div className="form-container-cart-page">
                        <div className="form-personal-data-container-cart-page">

                        </div>

                        <div className="form-btn-container-contact-section-2">


                            <a className="tag-a" href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar orçamento do(s) produto(s) ${pedido}.`}
                                target="_blank" rel="noreferrer">
                                <div className="btns-send-container-contact-section-2">
                                    <div onClick={() => navigate(`/produtos`)} className="btn-send-contact-section-2">SOLICITAR ORÇAMENTO</div>
                                </div>
                            </a>


                            <div className="btns-send-container-contact-section-2">
                                <button onClick={() => navigate(`/produtos`)} className="btn-send-contact-section-2">CONTINUAR COMPRANDO</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}