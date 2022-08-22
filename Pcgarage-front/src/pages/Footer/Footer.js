import "./StyledFooter.css";
import iconPhone from "../../images/icon-phone.png"
import iconEmail from "../../images/icon-letter.png"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../components/global/globalContext";
import axios from "axios";
import { BASE_URL } from "../../components/constants/BaseURL";

export default function Footer() {
    const data = useContext(GlobalContext);
   
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

    return (
        <div id="footer">
            <div className="footer-container">
                <div className="footer-phone-email-container">
                    <div className="footer-phone-container" data-aos="fade-down">
                        <div className="footer-icon-box">
                            <img className="footer-icon-email" src={iconPhone} alt="icon-phone" />
                        </div>
                        <div className="footer-phone-number">{parametros && parametros[0].celular} | {parametros && parametros[0].telefone}</div>
                    </div>
                    <div className="footer-email-container" data-aos="fade-up">
                        <div className="footer-icon-box">
                            <img className="footer-icon-email" src={iconEmail} alt="icon-email" />
                        </div>
                        <div className="footer-email">{parametros && parametros[0].email}</div>
                    </div>
                </div>
                <div className="footer-edress-container">
                    <div className="footer-edress">{parametros && parametros[0].endereco}</div>
                    <div className="footer-developer">@2022 developer-CFS</div>
                </div>
            </div>
        </div>
    )
}