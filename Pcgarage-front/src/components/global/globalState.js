import { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BaseURL";
import axios from "axios";
import { Build } from "@material-ui/icons";

export default function GlobalState(props) {
    let [cart, setCart] = useState([""]);
    const [prodToDetail, setProdToDetail] = useState([""]);
    let [refresh, setRefresh] = useState(false);
    let [toAdd, setToAdd] = useState("");
    let [toEdit, setToEdit] = useState("");
    let [search, setSearch] = useState("TODOS PRODUTOS");
    let [title, setTitle] = useState("TODOS PRODUTOS");
    let [pedido, setPedido] = useState("");
    let [newdestaques, setNewDestaques] = useState("");
    const [url, setPokeUrl] = useState(`${BASE_URL}`)


/*
    const galerias = useRequestData(BASE_URL + "/galerias")

    const parametros = useRequestData(BASE_URL + "/informacoes")

    const produtos = useRequestData(BASE_URL + "/produtos")

    let destaques = useRequestData(BASE_URL + "/destaques")

    let usuarios = useRequestData(BASE_URL + "/admin")

    let videos = useRequestData(BASE_URL + "/videos")
*/
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


    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({ cart }))
        
        if (Array.isArray(cart)) {
            let nextPedido = ""
            for (let prod of cart) {
                let prods = `-> Produto:${prod.nome} quantidade=${prod.quantidade}`;
                let newMessage = prods + nextPedido
                nextPedido = newMessage
            }
            setPedido(nextPedido)
        }
        
    }, [cart])

    const data = {
        cart,
        setCart,
        removeFromCart,
        addCountProduct,
        removeCountProduct,
        prodToDetail,
        setProdToDetail,
        refresh,
        setRefresh,
        toAdd,
        setToAdd,
        toEdit,
        setToEdit,
        search,
        setSearch,
        title,
        setTitle,
        pedido,
        setPedido,
        newdestaques,
        setNewDestaques
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

