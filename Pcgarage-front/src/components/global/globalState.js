import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import botton from "../../images/fotos/Bottons e Pins/Bottons - Diversas Personalizacoes_BT7001-ok.jpg"
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";

export default function GlobalState(props) {
    const [cart, setCart] = useState([])
    const [prodToDetail, setProdToDetail] = useState([""])
    let [refresh, setRefresh] = useState(false)
    let [toAdd, setToAdd]= useState("")
    let [toEdit, setToEdit]= useState("")



    const galerias = useRequestData(BASE_URL+"/galerias")

    const parametros = useRequestData(BASE_URL + "/informacoes")

    const produtos = useRequestData(BASE_URL + "/produtos")

    let destaques = useRequestData(BASE_URL + "/destaques")

    let usuarios = [{
        nome:"admin",
        senha:'admin'
    }]

    let videos = useRequestData(BASE_URL + "/videos")

    const removeFromCart = (item) => {
        const index = cart.findIndex((i) => item.id === i.id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const addCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.id)

        const newQtd = Number(newCart[index].quantidade) + 1

        newCart[index].quantidade = newQtd
        setCart(newCart)
    })

    const removeCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.id)

        if (newCart[index].quantidade === 0) {
            return newCart
        } else {
            const newQtd = Number(newCart[index].quantidade) - 1
            newCart[index].quantidade = newQtd

        }
        setCart(newCart)

    })

    let allProducts = {
        products: [
            {
                id: "001",
                nome: "Bottons",
                descricao: "Diversas pesonalizações",
                imagem: botton,
                referencia: "cc 17001",

            }
        ]
    }

    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({cart}))
    }, [cart])


    useEffect(() => {
        const prodToDetail = localStorage.getItem('prodToDetail')
        if (prodToDetail) {
            setProdToDetail(JSON.parse(prodToDetail))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('prodToDetail', JSON.stringify(prodToDetail))
    }, [prodToDetail])


    const data = {
        cart,
        setCart,
        removeFromCart,
        addCountProduct,
        removeCountProduct,
        allProducts,
        galerias,
        parametros,
        produtos,
        destaques,
        prodToDetail,
        setProdToDetail,
        refresh,
        setRefresh,
        toAdd,
        setToAdd,
        toEdit, 
        setToEdit,
        usuarios,
        videos
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

