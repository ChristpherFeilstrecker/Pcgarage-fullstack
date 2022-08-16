import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../../../components/constants/BaseURL";
import GlobalContext from "../../../../components/global/globalContext";
import useForm from "../../../../components/hooks/useForm";
import { SubTitleTagB } from "../../../../StyledGlobal";
import "./StyledIntroSection4.css";

export default function IntroSection4() {
    const data = useContext(GlobalContext);
    const [form, onChange, clear] = useForm({ name: "", phone: "", email: "", message: "" })

    const useRequestData = (url) => {
        const [data, setData] = useState();
        let urlLink = url
       
            axios
                .get(urlLink)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
    
        return data;
    
    }

    const parametros = useRequestData(BASE_URL + "/informacoes")

    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)
        console.log("form", form)
        clear()
    }

//onSubmit={onChangeInputs}
    return (
        <div id="intro-section-4">
            <form action="https://api.staticforms.xyz/submit" method="POST" className="form-container-box"  >
                <div className="title-section-4">
                    <SubTitleTagB className="title-word-section-4" data-aos="fade-down">Entre em contato conosco</SubTitleTagB>
                </div>
                <div className="form-container-section-4">
                    <div className="form-personal-data-container-section-4">
                        <input type="hidden" name="accessKey" value="db9a9f30-9b38-4e8f-ab57-c41aa602fc62"/>
                        <input type="hidden" name="redirectTo" value="http://localhost:3000"/>
                        <input
                            data-aos="fade-up"
                            placeholder={"Seu nome*"}
                            type='name'
                            name="name"
                            //value={form.name}
                            //onChange={onChange}
                            required
                        />
                        <input
                            data-aos="fade-down"
                            placeholder={"Telefone/whats*"}
                            type='number'
                            name="phone"
                            //value={form.phone}
                            //onChange={onChange}
                            required
                        />
                        <input
                            data-aos="fade-down"
                            placeholder={"Email*"}
                            type='email'
                            name="email"
                            //value={form.email}
                            //onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-message-container-section-4">
                        <input
                            data-aos="fade-up"
                            placeholder={"Mensagem*"}
                            type='text'
                            name="message"
                            //value={form.message}
                            //onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-btn-container-section-4">
                        <div className="btns-send-container-section-4">
                            <button  data-aos="fade-up" className="btn-send-section-4">ENVIAR</button>
                        </div>
                        <div className="or-use-container">
                            <div className="or-use-text"> ou use</div>
                        </div>
                        <div className="whats-btn-container">
                            <div href="" className="whats-btn" data-aos="fade-down">
                                <div className="whats-btn-blue">
                                  
                                <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar um orçamento.`}  className="whats-text-intro-section-4" target="_blank" rel="noreferrer">
                                WHATSAPP
                            </a>
                                </div>
                                <div className="whats-btn-green">
                                 
                                <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar um orçamento.`}  className="whats-text-intro-section-4" target="_blank" rel="noreferrer">
                                WHATSAPP
                            </a>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}