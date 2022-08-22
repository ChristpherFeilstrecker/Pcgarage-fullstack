import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import delRequestData from "../../../../../../components/hooks/delRequestData"
import { BASE_URL } from "../../../../../../components/constants/BaseURL";
import GlobalContext from "../../../../../../components/global/globalContext";
import useForm from "../../../../../../components/hooks/useForm";
import EditRequestData from "../../../../../../components/hooks/EditRequestData";
import "./StyledCards.css"
import axios from "axios";

export default function ListProdCard(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let setInfoOpen = props.setInfoOpen
    let setProdSel = props.setProdSel

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

    let galerias = useRequestData(BASE_URL + "/galerias")

    let parametros = useRequestData(BASE_URL + "/informacoes")

    let produtos = useRequestData(BASE_URL + "/produtos")

    let destaques = useRequestData(BASE_URL + "/destaques")

    let usuarios = useRequestData(BASE_URL + "/admin")

    let videos = useRequestData(BASE_URL + "/videos")
 
    let [message, setMessage] = useState("")

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }
let tel = parametros && parametros[0].telefone
   // Informações para editar

   const [formEditInfo, onChangeEditInfo] = useForm({ telefone: tel, celular: parametros && parametros[0].celular, email: parametros && parametros[0].email, endereco: parametros && parametros[0].endereco, facebook: parametros && parametros[0].facebook, instagram: parametros && parametros[0].instagram, youtube: parametros && parametros[0].youtube })

   const EditInfoBD = e => {
       e.preventDefault()
       let body = {
           id:"001",
           telefone: formEditInfo.telefone,
           celular: formEditInfo.celular,
           email: formEditInfo.email,
           endereco: formEditInfo.endereco,
           facebook: formEditInfo.facebook,
           instagram: formEditInfo.instagram,
           youtube: formEditInfo.youtube,
       }
       console.log("body",body)
       EditRequestData(BASE_URL + "/editarinformacoes",body)

       setMessage("Informações editadas com sucesso");
       setTimeout(() => {
           setMessage("")
           document.location.reload(true);
       }, 1000)

   }

   //fim editar informações

   //abrir opção selecionada para editar
    const openProdToEdit=(prod)=>{
        setInfoOpen(true)
        setProdSel(prod)
    }

    const DeleteGaleriaBD = (id) => {
 
        delRequestData(BASE_URL + `/deletargaleria?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listGal = galerias && galerias
    .map((gal) => {
        return <div key={gal.id} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(gal)} className="position-name-edit-or-delete">{gal.nome}</div>
        <strong onClick={()=>DeleteGaleriaBD(gal.id)} className="button-delete">X</strong>
    </div>
    })

    const DeleteProdutoBD = (id) => {
 
        delRequestData(BASE_URL + `/deletarproduto?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listProd = produtos && produtos
    .map((prod) => {
        return <div key={prod.id} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(prod)} className="position-name-edit-or-delete">{prod.nome}</div>
        <strong onClick={()=>DeleteProdutoBD(prod.id)} className="button-delete">X</strong>
    </div>
    })

    const DeleteAdminBD = (id) => {
 
        delRequestData(BASE_URL + `/deletaradmin?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listUsers = usuarios && usuarios
    .map((user) => {
        
        return <div key={user.id} className="body-position-to-edit-or-delete">
        <div className="position-name-edit-or-delete">{user.nome}</div>
        <strong onClick={()=>DeleteAdminBD(user.id)} className="button-delete">X</strong>
    </div>
    })

    const DeleteVideoBD = (id) => {
 
        delRequestData(BASE_URL + `/deletarvideo?id=${id}`)

        setTimeout(() => {
            document.location.reload(true);
        }, 1000)

    }

    const listVideos = videos && videos
    .map((video) => {
        return <div key={video.id} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(video)} className="position-name-edit-or-delete">{video.nome}</div>
        <strong onClick={()=>DeleteVideoBD(video.id)} className="button-delete">X</strong>
    </div>
    })

    const prodToEdit = () => {
        if (toEdit === "DESTAQUES") {
            return <div>
                <strong>Selecione o destaque que deseja editar</strong>

                <div className="container-list-to-edit">
                    <div className="title-list-to-edit">
                        <div className="title-position-to-edit">Posição</div>
                        
                        <div>Nome</div>
                    </div>
                    <div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">1</div>
                            <div onClick={()=>openProdToEdit(destaques && destaques[0])} className="position-name-edit">{destaques && destaques[0].nome}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">2</div>
                            <div onClick={()=>openProdToEdit(destaques && destaques[1])} className="position-name-edit">{destaques && destaques[1].nome}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">3</div>
                            <div onClick={()=>openProdToEdit(destaques && destaques[2])} className="position-name-edit">{destaques && destaques[2].nome}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">4</div>
                            <div onClick={()=>openProdToEdit(destaques && destaques[3])} className="position-name-edit">{destaques && destaques[3].nome}</div>
                        </div>
                    </div>

                </div>
            </div>
        } else if (toEdit === "PRODUTOS") {
            return <div>
            <strong>Selecione o produto que deseja editar</strong>
            <div className="container-list-to-edit">
                <div className="title-list-to-edit-or-delete">
                    <div className="title-position-to-edit">Editar</div>
                    <div>Excluir</div>
                </div>
                <div>

                    {listProd}
                    
                </div>

            </div>
        </div>
        } else if (toEdit === "GALERIAS") {
            return <div>
                <strong>Selecione a galeria que deseja editar</strong>
                <div className="container-list-to-edit">
                    <div className="title-list-to-edit-or-delete">
                        <div className="title-position-to-edit">Editar</div>
                        <div>Excluir</div>
                    </div>
                    <div>

                        {listGal}
                        
                    </div>

                </div>
            </div>
        } else if (toEdit === "VIDEOS") {
            return <div>
            <strong>Selecione o video que deseja editar</strong>
            <div className="container-list-to-edit">
                <div className="title-list-to-edit-or-delete">
                    <div className="title-position-to-edit">Editar</div>
                    <div>Excluir</div>
                </div>
                <div>

                    {listVideos}
                    
                </div>

            </div>
        </div>
        } else if (toEdit === "INFORMAÇÕES") {
            return <div className="product-to-edit">
            <form onSubmit={EditInfoBD} className="form-Subsection3">
            <strong>Editar Informações:</strong>
                 <div className="flex-container" >
                     <label>Telefone:</label>
                     <input
                         placeholder={"Telefone*"}
                         type='telefone'
                         name="telefone"
                         value={formEditInfo.telefone}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                         
                     /></div>
                 <div className="flex-container" >
                     <label>Celular:</label>
                     <input
                         placeholder={"Celular*"}
                         type='celular'
                         name="celular"
                         value={formEditInfo.celular}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                         
                     />
                 </div>
                 
                 <div className="flex-container" >
                     <label>Email:</label>
                     <input
                         placeholder={"Email*"}
                         type='email'
                         name="email"
                         value={formEditInfo.email}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                        
                     />
                 </div>

                 <div className="flex-container" >
                     <label>Endereço:</label>
                     <input
                         placeholder={"Endereço*"}
                         type='endereco'
                         name="endereco"
                         value={formEditInfo.endereco}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                         
                     />
                 </div>

                 <div className="flex-container" >
                     <label>Facebook:</label>
                     <input
                         placeholder={"Facebook*"}
                         type='facebook'
                         name="facebook"
                         value={formEditInfo.facebook}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                         
                     />
                 </div>

                 <div className="flex-container" >
                     <label>Instagram:</label>
                     <input
                         placeholder={"Instagram*"}
                         type='instagram'
                         name="instagram"
                         value={formEditInfo.instagram}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                         
                     />
                 </div>

                 <div className="flex-container" >
                     <label>Youtube:</label>
                     <input
                         placeholder={"Youtube*"}
                         type='youtube'
                         name="youtube"
                         value={formEditInfo.youtube}
                         onChange={onChangeEditInfo}
                         className="input-Subsection3"
                         
                     />
                 </div>
                 
                 <div className="btn-container" >
                     <button type="submit">Salvar</button>
                 </div>
             </form>
             <div>{message}</div>
             <div>
                 <button onClick={() => goToApp()}>voltar</button>
             </div>

             <div className="product-to-edit" >
             <strong>Informações Atuais:</strong>
             <label>Telefone: {parametros && parametros[0].telefone}</label>
             <label>Celular: {parametros && parametros[0].celular}</label>
             <label>Email: {parametros && parametros[0].email}</label>
             <label>Endereço: {parametros && parametros[0].endereco}</label>
             <label>Facebook: {parametros && parametros[0].facebook}</label>
             <label>Instagram: {parametros && parametros[0].instagram}</label>
             <label>Youtube: {parametros && parametros[0].youtube}</label>
             </div>

         </div>
        } else if (toEdit === "USUÁRIO") {
            return <div>
            <strong>Excluir Administrador</strong>
            <div className="container-list-to-edit">
                <div className="title-list-to-edit-or-delete">
                    <div className="title-position-to-edit"></div>
                    <div>Excluir</div>
                </div>
                <div>

                    {listUsers}
                    
                </div>

            </div>
        </div>
        }
    }

    return (
        <div className="list-product-card">
            {prodToEdit()}
        </div>
    )
}