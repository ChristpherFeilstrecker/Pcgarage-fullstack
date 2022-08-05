import useForm from "../../../../components/hooks/useForm";
import { registDataMessage } from "../../../../components/services/useRequire";
import { SubTitleTagB } from "../../../../StyledGlobal";
import whatsBlue from "../../../../images/icon-whatss-blue.png"
import whatsGreen from "../../../../images/icon-whatss-green.png"
import "./StyledIntroSection4.css";

export default function IntroSection4() {

    const [form, onChange, clear] = useForm({ name: "", phone: "", email: "", message: "" })

    const onChangeInputs = (ev) => {
        ev.preventDefault()
        // registDataMessage(form, clear)
        console.log("form", form)
        clear()
    }


    return (
        <div id="intro-section-4">
            <form className="form-container-box" onSubmit={onChangeInputs}>
                <div className="title-section-4">
                    <SubTitleTagB className="title-word-section-4" data-aos="fade-down">Entre em contato conosco</SubTitleTagB>
                </div>
                <div className="form-container-section-4">
                    <div className="form-personal-data-container-section-4">
                        <input
                            data-aos="fade-up"
                            placeholder={"Nome Completo*"}
                            type='name'
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            required
                        />
                        <input
                            data-aos="fade-down"
                            placeholder={"Telefone*"}
                            type='number'
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            required
                        />
                        <input
                            data-aos="fade-down"
                            placeholder={"Email*"}
                            type='email'
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="form-message-container-section-4">
                        <input
                            data-aos="fade-up"
                            placeholder={"Mensagem*"}
                            type='text'
                            name="message"
                            value={form.message}
                            onChange={onChange}
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
                                  
                                  <div className="whats-text-intro-section-4">WHATSAPP</div> 
                                </div>
                                <div className="whats-btn-green">
                                 
                                <div className="whats-text-intro-section-4">WHATSAPP</div>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}