import "./StyledContactSection2.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../../../images/arrow.png";
import useForm from "../../../../components/hooks/useForm";
import { SubTitleTagB } from "../../../../StyledGlobal";

import iconFacebookBlack from "../../../../images/icon_facebook_black.png"
import iconFacebookBlue from "../../../../images/icon_facebook_blue.png"

import iconTwiterBlack from "../../../../images/icon_twiter_black.png"
import iconTwiterBlue from "../../../../images/icon_twiter_blue.png"

import iconInstaBlack from "../../../../images/icon_instagram_black.png"
import iconInstaBlue from "../../../../images/icon_instagram_blue.png"

import iconGoogleBlack from "../../../../images/icon_google_black.png"
import iconGoogleBlue from "../../../../images/icon_google_blue.png"

import iconLetterBlue from "../../../../images/icon-letter-blue.png"
import iconPhoneBlue from "../../../../images/icon-phone-blue.png"
import iconPointerBlue from "../../../../images/icon-pointer-blue.png"
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function ContactSection2() {
    let navigate = useNavigate();
    
    const data = useContext(GlobalContext);
    const parametros = data.parametros

    console.log('PARAMETROS',parametros)
    const [form, onChange, clear] = useForm({ name: "",email: "", celPhone: "",phone: "" , message: "" })

    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)
        console.log("form", form)
        clear()
    }

    return (
        <div id="contact-section-2">
            <div className="header-container-contact-section-2">
                <div className="header-text-contact-section-2">
                    <div onClick={() => navigate(`/`)} className="nav-word-header-contact-section-2">INÍCIO</div>
                    <img className="arrow-section-2" src={arrow} alt="arrow" /> CONTATO</div>
            </div>

            <div className="body-container-contact-section-2">
                <div className="left-box-contact-section-2">
                    <form className="form-container-box-contact-section-2" onSubmit={onChangeInputs}>
                        <div className="title-contact-section-2">
                            <SubTitleTagB className="title-word-contact-section-2">Entre em contato conosco</SubTitleTagB>
                        </div>
                        <div className="form-container-contact-section-2">
                            <div className="form-personal-data-container-contact-section-2">
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
                                    <button className="btn-send-contact-section-2">ENVIAR</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="rigth-box-contact-section-2">

                    <div className="rigth-first-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">MIDIAS</div>

                        <div className="rigth-box-itens-contact-section-2">
                            <div className="rigth-box-icon-contact-section-2">
                               <img className="rigth-icon-contact-section-2" src={iconFacebookBlack} alt="facebook-icon"/> 
                               <img className="rigth-sub-icon-contact-section-2" src={iconFacebookBlue} alt="facebook-icon"/>
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                               <img className="rigth-icon-contact-section-2" src={iconTwiterBlack} alt="twiter-icon"/> 
                               <img className="rigth-sub-icon-contact-section-2" src={iconTwiterBlue} alt="twiter-icon"/>
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                               <img className="rigth-icon-contact-section-2" src={iconInstaBlack} alt="insta-icon"/> 
                               <img className="rigth-sub-icon-contact-section-2" src={iconInstaBlue} alt="insta-icon"/>
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                               <img className="rigth-icon-contact-section-2" src={iconGoogleBlack} alt="google-icon"/> 
                               <img className="rigth-sub-icon-contact-section-2" src={iconGoogleBlue} alt="google-icon"/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE</div>
                        <div className="rigth-box-itens-contact-section-2">
                        <img className="rigth-icon-contact-section-2" src={iconPhoneBlue} alt="letter-icon"/>
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].whats} | {parametros && parametros[0].telefone}</div>
                        </div>
                    </div>

                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                        <img className="rigth-icon-contact-section-2" src={iconLetterBlue} alt="letter-icon"/>
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].email}</div>
                        </div>
                    </div>

                    <div className="rigth-last-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">ENDEREÇO</div>
                        <div className="rigth-box-edress-contact-section-2">
                        <img className="rigth-icon-contact-section-2" src={iconPointerBlue} alt="letter-icon"/>
                            <div className="rigth-box-text-edress-contact-section-2">{parametros && parametros[0].endereco}</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}