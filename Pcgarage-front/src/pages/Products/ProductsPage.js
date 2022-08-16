//import { useNavigate } from "react-router-dom";
import "./StyledProductsPage.css";
import CardProducts from "./CardProducts";
import { useContext, useState } from "react";
import GlobalContext from "../../components/global/globalContext";
import axios from "axios";
import { BASE_URL } from "../../components/constants/BaseURL";


export default function ProductsPage(props) {
    const data = useContext(GlobalContext);
    const setTitle = data.setTitle
    const setSearch = data.setSearch
    const title = data.title
    const search = data.search

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
    const galerias = useRequestData(BASE_URL + "/galerias")
    const produtos = useRequestData(BASE_URL + "/produtos")

    const showModal = () => {
        let element = document.getElementById("modal");
        element.classList.add("show-modal");
    }

    const showDetailProduct = (code) => {
        props.setProductID(code)
        showModal()
    }

    const setSearchFunction=(galeri)=>{
        setSearch(`${galeri.id}`)
        setTitle(`${galeri.nome}`)
    }

    //<div key={galeri.id} onClick={() => setSearchFunction(galeri)} className="category-sector-1">{galeri.nome

    const listGaleri = galerias && galerias
    .map((galeri) => {
        return <div key={galeri.id} onClick={() => setSearchFunction(galeri)} className="category-sector-1">{galeri.nome}</div>
    })


    const listProducts = produtos && produtos
        .filter((product) => {
         
            if (search === "TODOS PRODUTOS") {
                return (product)
            } else { 
                return (product.id_galeria.includes(search));
            }

        })
        .map((product) => {
            return <CardProducts key={product.id} product={product} showDetailProduct={showDetailProduct} />
        })


    return (
        <div id="productsPage">
            <div className="body-products">
                <div className="menu-products-sector-1">
                    <div className="box-menu-products-sector-1">
                        <div className="tittle-menu-products-sector-1">CATEGORIAS DE PRODUTOS </div>
                        <div className="box-category-menu-products-sector-1">
                            {listGaleri}
                        </div>
                    </div>
                </div>
                <div className="products-sector-1">
                    <div className="box-section-products-sector-1">
                        <div className="tittle-products-sector-1">{title.toUpperCase()}</div>
                        <div className="container-products-sector-1">
                            {listProducts}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}