import "./StyledIntroSection1.css";
import camiseta from "../../../../images/fotos_iniciais/camiseta.jpg"
import quadro from "../../../../images/fotos_iniciais/quadro.jpg"
import cinto from "../../../../images/fotos_iniciais/cinto.jpg"
import portaoculos from "../../../../images/fotos_iniciais/portaoculos.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection1() {
    const navigate = useNavigate();
    const data = useContext(GlobalContext);
    const parametros = data.parametros
    const setSearch = data.setSearch
    const setTitle = data.setTitle
    const destaques = data.destaques

    const setSearchFunction = (id, title) => {
        
        setSearch(`${id}`)
        navigate(`/aggostini/produtos`)
        setTitle(title)
    }

    return (
        <div id="intro-section-1">

            <div className="body-intro-section-1">
                <div className="body-left-container">
                    <img className="img-destaque rotato_to_left" src={destaques && destaques[0].imagem} alt="produto_destaque" />

                </div>

                <div className="body-rigth-container">
                    <div className="title-rigth-container">{destaques && destaques[0].nome}</div>
                    <div className="text-rigth-container">{destaques && destaques[0].descricao}</div>
                    <div className="btns-rigth-container" onClick={() => setSearchFunction("0afb5669-ac16-4af6-b6ea-38569761a07c", "SOLAR")}>
                        <div className="btn-rigth-container-more">VER PRODUTOS</div>
                        <a href={`https://api.whatsapp.com/send?phone=99999&text=Olá! Gostária de solicitar um orçamento de painel solar.`} target="_blank">
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
                        <div onClick={() => setSearchFunction("1d2e97cb-c11b-4593-b6c5-0a37e59fc598", "REPAROS")} className="btn-rigth-container-more">VER PRODUTOS</div>
                        <div className="btn-rigth-container">
                            <a href={`https://api.whatsapp.com/send?phone=99999&text=Olá! Gostária de solicitar um orçamento para reparos.`} target="_blank">
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
                        <div onClick={() => setSearchFunction("4b6897a4-1861-46fa-b0ad-7d9ce98e0898", "PRESSURIZADORES")} className="btn-rigth-container-more">VER PRODUTOS</div>
                        <div className="btn-rigth-container">
                            <a href={`https://api.whatsapp.com/send?phone=99999&text=Olá! Gostária de solicitar um orçamento de pressurizadores.`} target="_blank">
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
                        <div onClick={() => setSearchFunction("593208d5-7ea3-4719-a339-5863ae1ec1d1", "AQUECEDORES")} className="btn-rigth-container-more">VER PRODUTOS </div>
                        <div className="btn-rigth-container">
                            <a href={`https://api.whatsapp.com/send?phone=99999&text=Olá! Gostária de solicitar um orçamento de aquecedores.`} target="_blank">
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