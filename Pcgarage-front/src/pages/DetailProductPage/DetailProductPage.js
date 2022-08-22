import { useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
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


import arrowLeft from "../../images/arrow-to-left.png"
import arrowRigth from "../../images/arrow-to-rigth.png"
import { BASE_URL } from "../../components/constants/BaseURL";
import axios from "axios";


export default function DetailProductPage(props) {
    //    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let cart = data.cart;
    const setCart = data.setCart;
    let pedido = data.pedido;
    const setPedido = data.setPedido;
    //const prodToDetail = data.prodToDetail;
    let [produToDetail, setProduTodetail] = useState("")
    let [qtd, setQtd] = useState("1")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [imgIndex, setImgIndex] = useState(0)
    const images = []
    const imgs = []

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


    const produtos = useRequestData(BASE_URL + "/produtos")// recebe a lista do produto do BD
    const params = window.location.search.substring(1).split(':'); // pega o id por params do produto selecionado
    const index = produtos && produtos.findIndex((i) => params && params[0] === i.id) // recebe a lista de produtos e retorna qual index do id recebido por params
    const prodToDetail = produtos && produtos[index]

    const ToDetail = () => {
        if (produtos) {
            for (let product of produtos) {
                if (product.id === params[0]) {
                    setProduTodetail(product)

                    return product
                }
            }
        }
    }


    useEffect((url) => {
        ToDetail()
    });

    const pushImgsToArray = (() => {

        if (prodToDetail && prodToDetail.imagem1) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = 0
            modelToMiniImg.img = prodToDetail.imagem1
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem1)

        }

        if (prodToDetail && prodToDetail.imagem2) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = images.length
            modelToMiniImg.img = prodToDetail.imagem2
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem2)
        }

        if (prodToDetail && prodToDetail.imagem3) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = images.length
            modelToMiniImg.img = prodToDetail.imagem3
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem3)
        }

        if (prodToDetail && prodToDetail.imagem4) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = images.length
            modelToMiniImg.img = prodToDetail.imagem4
            imgs.push(modelToMiniImg)
            images.push(prodToDetail.imagem4)
        }

        if (prodToDetail && prodToDetail.imagem5) {
            const modelToMiniImg = {
                id: "",
                img: ""
            }
            modelToMiniImg.id = images.length
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

    const getProduct = (() => {

        const addProductToCart = (() => {
            const newProduct = {
                id: prodToDetail.id,
                nome: prodToDetail.nome,
                descricao: prodToDetail.descricao,
                imagem: prodToDetail.imagem1,
                quantidade: qtd
            }

            if (Array.isArray(cart)) {

                let index = cart && cart.findIndex(i => i.id === prodToDetail.id)

                if (index === -1) {
                    let newCart = [...cart, newProduct]
                    setCart(newCart)
                    setMessage("Produto adicionado no carrinho")
                    setAlert(true)
                    showAlert()
                    setPedido("")

                } else {
                    setMessage("Produto ja consta no carrinho")
                    setAlert(true)
                    showAlert()
                }
            } else {
                let newCart = [newProduct]
                setCart(newCart)
                setMessage("Produto adicionado no carrinho")
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

        const listImgs = imgs && imgs
            .map((img) => {
                return <div key={img.id} onClick={() => setImgIndex(img.id)} className="img-container">
                    <img className="mini-img" src={img.img} alt="produto" />
                </div>
            })

        return <div>
            <div className="title-detail-products-page">Detalhes do produto</div>


            {prodToDetail ?
                <div className="container-1-detail-products-page">
                    <div className="container-select-img">
                        <img onClick={() => switchImgToRigth()} className="arrow" src={arrowLeft} alt="car-icon" />
                        <img className="image-product-sector-1" src={prodToDetail && imgs[imgIndex].img} alt={"imagem produto"} />
                        <img onClick={() => switchImgToLeft()} className="arrow" src={arrowRigth} alt="car-icon" />
                    </div>

                    <div className="box-1-detail-products-page">
                        <div>{prodToDetail && prodToDetail.nome}</div>
                        <div>{prodToDetail && prodToDetail.descricao}</div>
                        <div>{prodToDetail && prodToDetail.observacao}</div>
                    </div>
                </div>
                :
                <div className="loader-container">
                <div className="loader"></div>
                </div>
            }
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

                            <a href={parametros && parametros[0].facebook} target="_blank">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconFacebookBlack} alt="facebook-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconFacebookBlue} alt="facebook-icon" />
                                </div>
                            </a>
                            <a href={parametros && parametros[0].instagram} target="_blank">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconInstaBlack} alt="insta-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconInstaBlue} alt="insta-icon" />
                                </div>
                            </a>

                            <a href={parametros && parametros[0].youtube} target="_blank">
                                <div className="rigth-box-icon-contact-section-2">
                                    <img className="rigth-icon-contact-section-2" src={iconGoogleBlack} alt="google-icon" />
                                    <img className="rigth-sub-icon-contact-section-2" src={iconGoogleBlue} alt="google-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">TELEFONE</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPhoneBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].celular} | {parametros && parametros[0].telefone}</div>
                        </div>
                    </div>
                    <div className="rigth-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">E-MAIL</div>
                        <div className="rigth-box-itens-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconLetterBlue} alt="letter-icon" />
                            <div className="rigth-box-text-contact-section-2">{parametros && parametros[0].email}</div>
                        </div>
                    </div>
                    <div className="rigth-last-block-contact-section-2">
                        <div className="rigth-box-title-contact-section-2">ENDEREÇO</div>
                        <div className="rigth-box-edress-contact-section-2">
                            <img className="rigth-icon-contact-section-2" src={iconPointerBlue} alt="letter-icon" />
                            <div className="rigth-box-text-edress-contact-section-2">{parametros && parametros[0].endereco}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}