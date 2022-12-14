import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import "./StyledRouter.css";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer';
import IntroPage from '../IntroPage/IntroPage'
import ProductsPage from '../Products/ProductsPage';
import AboutPage from '../AboutPage/AboutPage'
import AssistancePage from '../AssistancePage/AssistancePage'
import ContactPage from '../ContactPage/ContactPage'
import CartPage from '../CartPage/CartPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import DetailProductPage from '../DetailProductPage/DetailProductPage';
import logo from '../../images/pclogo.png';
import iconWhats from '../../images/whatsapp-fixed.png';
import AdminPage from '../AdminPage/AdminPage';
import GlobalContext from '../../components/global/globalContext';
import axios from 'axios';
import { BASE_URL } from '../../components/constants/BaseURL';

export const Router = () => {
  const data = useContext(GlobalContext);
   // const parametros = data.parametros
  const [splash, setSplash] = useState(false)
  let [productID, setProductID] = useState('001')

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

let parametros = useRequestData(BASE_URL + "/informacoes")

let celular = parametros && parametros[0].celular
let newCel = "55"+ celular

useEffect(()=>{
  setSplash(true)
  setTimeout(()=>{
    setSplash(false)
  },4000)
},[])

  return (
<div>
  {splash?
  <div className='splash-screm'><img className="image-splash" src={logo} alt="caneca" /></div>
    :
    <BrowserRouter className="page">
      <div className='whats-icon-container'>
      <a href={`https://api.whatsapp.com/send?phone=${parseFloat(newCel)}&text=Ol??! Gost??ria de solicitar um or??amento.`}
    target="_blank" rel="noreferrer">
      <img className="whats-fixed-icon" src={iconWhats} alt="icon-whats"/>
    </a>       
      </div>
      <TopBar/>
      <Routes id="routes">
        <Route exact path={"/"} element={<IntroPage />} />
        <Route exact path={"/sobre/*"} element={<AboutPage />} />
        <Route exact path={"/produtos"} element={<ProductsPage productID={productID} setProductID={setProductID} />} />
        <Route exact path={"/videos"} element={<AssistancePage />} />
        <Route exact path={"/contato"} element={<ContactPage />} />
        <Route exact path={"/carrinho"} element={<CartPage />} />
        <Route exact path={"/detalhe_produto"} element={<DetailProductPage productID={productID} />} />
        <Route exact path={"/admin/*"} element={<AdminPage />} />
        <Route element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    }
</div>
    


  )

}