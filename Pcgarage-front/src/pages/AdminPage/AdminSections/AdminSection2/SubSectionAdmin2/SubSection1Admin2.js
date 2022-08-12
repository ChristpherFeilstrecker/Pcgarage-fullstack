//import hands from "../../../../../images/cliente_missao.jpg"
import "./StyledSubSection1Admin2.css";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
//import GlobalContext from "../../../../../components/global/globalContext";
import useForm from "../../../../../components/hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../../../../components/constants/BaseURL";

export default function SubSection1Admin2() {
    let navigate = useNavigate();

    //const data = useContext(GlobalContext);

    const [form, onChange] = useForm({ nome:"", password:"" })
    let[message,setMessage]=useState("")
    const Login = async e => {
        e.preventDefault()

        let url = `${BASE_URL}/login`

        let body={
            nome:form.nome,
            password:form.password
        }
        
        axios
            .post(url,body)
            .then((res) => {

               localStorage.setItem("token", res.data.accessToken);
               navigate("/admin/painel_de_controle")

                if (res.data.user.hasAddress === false) {
                    console.log("res",res.data)
                } else {

                }
            })
            .catch((err) => {
                if (err.response) {
                    setMessage(err.response.data)
                }
            });
    };


    return (
        <div className="container-admin-subsection1">
            <form className="form-container-box-admin-section-2" onSubmit={Login}>
                <div className="title-admin-section-2">
                    <div className="title-word-admin-section-2">PC GARAGE ADMIN</div>
                </div>
                <div className="form-container-section-2">
                    <div className="form-container-inputs">
                        <div>{message}</div>
                        <input
                            placeholder={"Nome*"}
                            type='nome'
                            name="nome"
                            value={form.nome}
                            onChange={onChange}
                            required
                        />

                        <input

                            placeholder={"Senha*"}
                            type='password'
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            required
                        />

                    </div>

                    <div className="form-btn-container-admin-section-2">
                        <div className="btns-send-container-admin-section-2">
                            <button className="btn-send-contact-section-2">Entrar</button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}