import "./StyledIntroSection1.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import GlobalContext from "../../../../components/global/globalContext";
//import useRequestData from "../../../../components/hooks/useRequestData"
import { BASE_URL } from "../../../../components/constants/BaseURL";
import axios from "axios";

export default function IntroSection1() {
    const navigate = useNavigate();
    const data = useContext(GlobalContext);
    const parametros = data.parametros

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

    const destaques = useRequestData(BASE_URL + "/destaques")

    return (
        <div id="intro-section-1">
            <div className="body-intro-section-1">
                <div className="body-left-container">
                    <img className="img-destaque rotato_to_left" src={destaques && destaques[0].imagem} alt="produto_destaque" />
                </div>

                <div className="body-rigth-container">
                    <div className="title-rigth-container">{destaques && destaques[0].nome}</div>
                    <div className="text-rigth-container">{destaques && destaques[0].descricao}</div>
                    <div className="btns-rigth-container" onClick={() => navigate("/produtos")}>
                        <div className="btn-rigth-container-more">VER PRODUTOS</div>
                        <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar um orçamento.`} target="_blank" rel="noreferrer">
                            <div className="btn-rigth-container">  ORÇAMENTO</div>
                        </a>
                    </div>
                </div>

            </div>

            <div className="body-intro-section-1">


                <div className="body-rigth-container">
                    <div className="title-rigth-container">{destaques && destaques[1].nome}</div>
                    <div className="text-rigth-container">{destaques && destaques[1].descricao}</div>
                    <div className="btns-rigth-container">
                        <div onClick={() => navigate("/produtos")} className="btn-rigth-container-more">VER PRODUTOS</div>
                        <div className="btn-rigth-container">
                            <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar um orçamento.`} target="_blank" rel="noreferrer">
                                ORÇAMENTO
                            </a> </div>
                    </div>
                </div>

                <div className="body-left-container">
                    <img className="img-destaque rotato_to_rigth" src={destaques && destaques[1].imagem} alt="produto_destaque" />
                </div>

            </div>

            <div className="body-intro-section-1">
                <div className="body-left-container">
                    <img className="img-destaque rotato_to_left" src={destaques && destaques[2].imagem} alt="produto_destaque" />
                </div>

                <div className="body-rigth-container">

                    <div className="title-rigth-container">{destaques && destaques[2].nome}</div>
                    <div className="text-rigth-container">{destaques && destaques[2].descricao}</div>

                    <div className="btns-rigth-container">
                        <div onClick={() => navigate("/produtos")} className="btn-rigth-container-more">VER PRODUTOS</div>
                        <div className="btn-rigth-container">
                            <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar um orçamento.`} target="_blank" rel="noreferrer">
                                ORÇAMENTO
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body-intro-section-1">



                <div className="body-rigth-container">

                    <div className="title-rigth-container">{destaques && destaques[3].nome}</div>
                    <div className="text-rigth-container">{destaques && destaques[3].descricao}</div>
                    <div className="btns-rigth-container">
                        <div onClick={() => navigate("/produtos")} className="btn-rigth-container-more">VER PRODUTOS </div>
                        <div className="btn-rigth-container">
                            <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].celular)}&text=Olá! Gostária de solicitar um orçamento.`} target="_blank" rel="noreferrer">
                                ORÇAMENTO
                            </a>
                        </div>
                    </div>
                </div>

                <div className="body-left-container">
                    <img className="img-destaque rotato_to_rigth" src={destaques && destaques[3].imagem} alt="produto_destaque" />
                </div>

            </div>
        </div>
    )
}