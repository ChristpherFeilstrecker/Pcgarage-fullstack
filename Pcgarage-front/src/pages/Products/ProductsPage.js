import { useNavigate } from "react-router-dom";
import "./StyledProductsPage.css";
import CardProducts from "./CardProducts";
import { useContext, useState } from "react";
import GlobalContext from "../../components/global/globalContext";


export default function ProductsPage(props) {
    const data = useContext(GlobalContext);
    const produtos = data.produtos

    let [search, setSearch] = useState("TODOS PRODUTOS");
    const navigate = useNavigate();

    const showModal = () => {
        let element = document.getElementById("modal");
        element.classList.add("show-modal");
    }

    const showDetailProduct = (code) => {
        props.setProductID(code)
        showModal()
    }


    const listProducts = produtos && produtos
        .filter((product) => {
            if (search === "TODOS PRODUTOS") {
                return (product)
            } else { return (product.nome.toUpperCase().includes(search.toUpperCase())); }

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
                            <div onClick={() => setSearch("botton")} className="category-sector-1">CINTOS</div>
                            <div onClick={() => setSearch("chaveiro")} className="category-sector-1">CAMISETAS</div>
                            <div onClick={() => setSearch("crachá")} className="category-sector-1">PORTA ÓCULOS</div>
                        </div>
                    </div>
                </div>
                <div className="products-sector-1">
                    <div className="box-section-products-sector-1">
                        <div className="tittle-products-sector-1">{search.toUpperCase()}</div>
                        <div className="container-products-sector-1">
                            {listProducts}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}