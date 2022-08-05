import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import GlobalState from "../../components/global/globalState";
import useForm from "../../components/hooks/useForm";
import { SubTitleTagB } from "../../StyledGlobal";
import CartProducts from "./CartProducts";
import "./StyledCartPage.css";


export default function CartPage(props) {
const data = useContext(GlobalContext);
const cart = data.cart
const setCart = data.setCart
    
    let navigate = useNavigate();

    const listProducts = (() => {

        const Products = cart
            .map((product) => {
                
                return <CartProducts key={product.id} product={product} />
            })

        return Products
    })

    const [form, onChange, clear] = useForm({ name: "", email: "", celPhone: "", phone: "", message: "" })

    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)
        
        clear()
    }

    const removeFromCart = (item)=>{
        const index = cart.findIndex((i) => item.id === i.id)
        cart.splice(index,1)
    }

    return (
        <div className="cart-page">
            <div className="my-car-container-cart-page">
                <div className="title-my-car-cart-page">MEU CARRINHO</div>
                <div className="products-container-cart-page">{cart.length > 0 ? 
                (<div>
                    {listProducts()}
                    <button className="btn-drain-products-cart-page" onClick={()=>setCart([])}>Esvaziar carrinho</button>
                </div>
                    
                ) 
                : (<div className="empt-car">Carinho vaziu</div>)}</div>
            </div>

            <div className="budget-container-cart-page">
                <form className="form-container-box-cart-page" onSubmit={onChangeInputs}>
                    <div className="title-contact-section-2">
                        <SubTitleTagB className="title-word-contact-section-2">Pedido de Orçamento</SubTitleTagB>
                    </div>
                    <div className="form-container-cart-page">
                        <div className="form-personal-data-container-cart-page">
                            <input

                                placeholder={"Seu nome*"}
                                type='name'
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                required
                            />

                            <input

                                placeholder={"Seu e-mail*"}
                                type='email'
                                name="email"
                                value={form.email}
                                onChange={onChange}
                                required
                            />

                            <input

                                placeholder={"Celular*"}
                                type='number'
                                name="celPhone"
                                value={form.celPhone}
                                onChange={onChange}
                            />

                            <input

                                placeholder={"Telefone*"}
                                type='number'
                                name="phone"
                                value={form.phone}
                                onChange={onChange}
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