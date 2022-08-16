import { ArrowBackIos } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

    let navigate = useNavigate();

    const listProducts = (() => {

        const Products = cart
            .map((product) => {

                return <CartProducts key={product.id} product={product} />
            })

        return Products
    })

console.log("pedido",pedido)
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
                <form action="https://api.staticforms.xyz/submit" method="POST" className="form-container-box-cart-page" >
                    <div className="title-contact-section-2">
                        <SubTitleTagB className="title-word-contact-section-2">Pedido de Orçamento</SubTitleTagB>
                    </div>
                    <div className="form-container-cart-page">
                        <div className="form-personal-data-container-cart-page">
                            <input type="hidden" name="accessKey" value="db9a9f30-9b38-4e8f-ab57-c41aa602fc62" />
                            <input type="hidden" name="redirectTo" value="http://localhost:3000/carrinho" />

                            <input

                                placeholder={"Seu nome*"}
                                type='name'
                                name="name"
                                //value={form.name}
                                //onChange={onChange}
                                required
                            />

                            <input

                                placeholder={"Seu e-mail*"}
                                type='email'
                                name="email"
                                // value={form.email}
                                //onChange={onChange}
                                required
                            />

                            <input

                                placeholder={"Telefone/whats*"}
                                type='number'
                                name="phone"
                            //value={form.celPhone}
                            //onChange={onChange}
                            />

                            <input

                                type="text"
                                name="$pedido"
                                defaultValue={pedido}
                            />


                        </div>
                        <div className="form-message-container-contact-section-2">
                            <input

                                placeholder={"Mensagem*"}
                                type='text'
                                name="message"
                                value={form.message}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-btn-container-contact-section-2">
                            <div className="btns-send-container-contact-section-2">
                                <button className="btn-send-contact-section-2">SOLICITAR ORÇAMENTO</button>
                            </div>
                            <div className="btns-send-container-contact-section-2">
                                <button onClick={() => navigate(`/produtos`)} className="btn-send-contact-section-2">CONTINUAR COMPRANDO </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}