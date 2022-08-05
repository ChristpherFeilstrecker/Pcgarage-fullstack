

EM DESENVOLVIMENTO

<h1 align="center" id="top">Projeto PC GARAGE</h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#surge">Surge</a> &#xa0; | &#xa0;
  <a href="#imagens">Imagens</a> &#xa0; | &#xa0;
  <a href="#desenvolvedor">Desenvolvedor</a> | &#xa0;
<a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#comousar">Como Usar</a> &#xa0; | &#xa0;

</p>
<h2 id="sobre"> Sobre </h2>

Projeto baseado em site e-comerce de produtos

<br />


<h2 id="surge"> Surge: </h2>

[]


<h2 id="imagens"> Imagens </h2>





<h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>

<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2> Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>


<h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>

- Javascript
- CSS
- React
- HTML
- Axios
- React-router-dom
- Styled Components

<h2 id="comousar"> Como usar </h2>

Teste o código no seu navegador pelo surge <a href="#surge">AQUI</a> ou pelo seu computador assim:
- Clone o código para seu computador.
- Rode o comando npm instal (para instalar bibliotecas).
- Rode o comando "npm run start", código ira abrir pelo localhost do seu computador.


<a href="#top">Voltar para o topo</a>



import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledDetailProductPage.css";
import addCar from "../../images/add-car.png"
import iconFacebookBlack from "../../images/icon_facebook_black.png"
import iconFacebookBlue from "../../images/icon_facebook_blue.png"

import iconTwiterBlack from "../../images/icon_twiter_black.png"
import iconTwiterBlue from "../../images/icon_twiter_blue.png"

import iconInstaBlack from "../../images/icon_instagram_black.png"
import iconInstaBlue from "../../images/icon_instagram_blue.png"

import iconGoogleBlack from "../../images/icon_google_black.png"
import iconGoogleBlue from "../../images/icon_google_blue.png"

import iconLetterBlue from "../../images/icon-letter-blue.png"
import iconPhoneBlue from "../../images/icon-phone-blue.png"
import iconPointerBlue from "../../images/icon-pointer-blue.png"

import branca from "../../images/fotos_iniciais/detalhes/camisetabranca.jpg"
import azul from "../../images/fotos_iniciais/detalhes/camisetaazul.jpg"
import vermelha from "../../images/fotos_iniciais/detalhes/camisetavermelha.jpg"

import arrowLeft from "../../images/arrow-to-left.png"
import arrowRigth from "../../images/arrow-to-rigth.png"


export default function DetailProductPage(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    const cart = data.cart;
    const setCart = data.setCart;
    const prodToDetail = data.prodToDetail;
    let [qtd, setQtd] = useState("1")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [imgIndex, setImgIndex] = useState(0)
    const images = [vermelha]
    const imgs = [{ id: 0, img: vermelha }]
    //const params = window.location.search.substring(1).split(':');
    //const products = data.allProducts.products
    // const produtos = data.produtos



    const pushImgsToArray = (() => {
        if (prodToDetail.imagem1) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = 1
            modelToMiniImg.img = prodToDetail.imagem1
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem1)

        }

        if (prodToDetail.imagem2) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = 2
            modelToMiniImg.img = prodToDetail.imagem2
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem2)
        }

        if (prodToDetail.imagem3) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = 3
            modelToMiniImg.img = prodToDetail.imagem3
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem3)
        }

        if (prodToDetail.imagem4) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.img = prodToDetail.imagem4
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem4)
        }

        if (prodToDetail.imagem5) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = 5
            modelToMiniImg.img = prodToDetail.imagem5
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem5)
        }
    })

    pushImgsToArray()

    const switchImgToLeft = (() => {
        if (imgIndex + 1 === images.length) {
            setImgIndex(0)

        } else {
            setImgIndex(imgIndex + 1)
        }

    })

    const switchImgToRigth = (() => {
        if (imgIndex === 0) {
            setImgIndex(images.length - 1)

        } else {
            setImgIndex(imgIndex - 1)
        }

    })
    console.log("carrinho", cart)
    const getProduct = (() => {

        const addProductToCart = (() => {

             const index = cart.findIndex((i) => prodToDetail.id === i.id)

            if (index === -1) {
                const newProduct = {
                    id: prodToDetail.id,
                    nome: prodToDetail.nome,
                    descricao: prodToDetail.descricao,
                    imagem: prodToDetail.imagem1,
                    quantidade: qtd
                }
                const newCart = [...cart, newProduct]
                setCart(newCart)
                setMessage("Produto adicionado no carrinho")
                setAlert(true)
                showAlert()
            } else {
                setMessage("Produto ja consta no carrinho")
                setAlert(true)
                showAlert()
            }

        })

        const addCount = (() => {
            const newQtd = Number(qtd) + 1
            setQtd(newQtd)
        })

        const subCount = (() => {
            if (qtd === 0) {
                return qtd
            } else {
                const newQtd = Number(qtd) - 1
                setQtd(newQtd)
            }

        })

        const showAlert = () => {
            setTimeout(() => {
                setAlert(false)
            }, 4000)
        }

        const listImgs = imgs
            .map((img) => {
                return <div key={img.id} onClick={() => setImgIndex(img.id)} className="img-container">
                    <img className="mini-img" src={img.img} alt="produto" />
                </div>
            })

        return <div>
            <div className="title-detail-products-page">Detalhes do produto</div>
            <div className="container-1-detail-products-page">
                <div className="container-select-img">
                    <img onClick={() => switchImgToRigth()} className="arrow" src={arrowLeft} alt="car-icon" />
                    <img className="image-product-sector-1" src={imgs[imgIndex].img} alt={prodToDetail.nome} />
                    <img onClick={() => switchImgToLeft()} className="arrow" src={arrowRigth} alt="car-icon" />
                </div>

                <div className="box-1-detail-products-page">
                    <div>{prodToDetail.nome}</div>
                    <div>{prodToDetail.descricao}</div>
                    <div>{prodToDetail.observacao}</div>
                </div>
            </div>
            <div className="container-btn-product-detail-page">
                <div className="mini-img-container">
                    {listImgs}
                </div>
                <div className="btns-container-box">
                    <div className="modal-quantiti-product">
                        QUANTIDADE:
                        <div className="modal-counter">
                            <div onClick={() => subCount()} className="modal-counter-add">-</div>
                            <div className="modal-counter-num">{qtd}</div>
                            <div onClick={() => addCount()} className="modal-counter-add">+</div></div>
                    </div>
                    <div onClick={() => addProductToCart()} className="btn-product-sector-1">
                        <div className="add-to-car-btn-text">Adicionar </div>
                        <img className="icon-add-car-btn-sector-1" src={addCar} alt="car-icon" />
                    </div>
                </div>

            </div>
        </div>
    })


    return (
        <div id="detailProductpage">

            <div className="alert-container">
                <div className={alert ? "alert-add-product-active" : "alert-add-product"}>{message} </div>
            </div>
            <div className="body-container-detail-page">
                <div className="container-products-detail-products-page">
                    {getProduct()}
                </div>
                <div className="rigth-box-contact-section-2">

                    <div className="rigth-first-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">MIDIAS</div>

                        <div className="rigth-box-itens-contact-section-2">
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconFacebookBlack} alt="facebook-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconFacebookBlue} alt="facebook-icon" />
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconTwiterBlack} alt="twiter-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconTwiterBlue} alt="twiter-icon" />
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconInstaBlack} alt="insta-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconInstaBlue} alt="insta-icon" />
                            </div>
                            <div className="rigth-box-icon-contact-section-2">
                                <img className="rigth-icon-contact-section-2" src={iconGoogleBlack} alt="google-icon" />
                                <img className="rigth-sub-icon-contact-section-2" src={iconGoogleBlue} alt="google-icon" />
                            </div>

                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPhoneBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">51 99999-9999 | 9999-9999</div>
                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconLetterBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">comercial@comercial.com.br</div>
                        </div>
                    </div>
                    <div className="rigth-last-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">ENDEREÇO</div>
                        <div className="rigth-box-edress-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPointerBlue} alt="letter-icon" />
                            <div className="rigth-box-text-edress-contact-section-2">Rua Avenida, Número, Cidade, RS, CEP 00000-000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}