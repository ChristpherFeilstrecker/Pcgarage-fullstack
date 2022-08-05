import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
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
import logo from '../../images/pclogo.jpg';
import iconWhats from '../../images/whatsapp-fixed.png';
import AdminPage from '../AdminPage/AdminPage';

export const Router = () => {
  const [splash, setSplash] = useState(false)
  let [productID, setProductID] = useState('001')

  

useEffect(()=>{
  setSplash(false)
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
      <a href="https://api.whatsapp.com/send?phone=&text=Olá! Gostária de solicitar um orçamento"
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