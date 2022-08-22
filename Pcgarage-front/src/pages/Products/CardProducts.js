import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../components/global/globalContext";


export default function CardProducts(props) {
    const data = useContext(GlobalContext);
    const { id,nome, imagem1, descricao1 } = props.product
    const [loading, setLoading] = useState(true)
    const setProdToDetail = data.setProdToDetail
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
       
    }, [])
    

    const goToDetailPage =((id)=>{
        setProdToDetail(props.product)
        navigate(`/detalhe_produto?${id}`)
        window.scrollTo(0, 0)
    })

    return (
        <div  id="cardProduct">
            <div className="product-sector-1">
                {loading ?
                    <div className="loader"></div>
                    : <div className="product-sector-1">
                        
                            <img className="image-product-sector-1" src={imagem1} alt={nome} />
                        
                        <div className="detail-container-product-sector-1">
                            <div className="detail-product-sector-1">{nome}</div>
                            <div className="detail-product-sector-1">{descricao1}</div>
                        </div>
                        <div className="container-btn-product-sector-1">
                            <div onClick={() => goToDetailPage(id)} className="btn-product-sector-1">
                                <div className="add-to-car-btn-text">Detalhes do produto </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}