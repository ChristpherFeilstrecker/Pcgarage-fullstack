import { useContext } from "react";
import GlobalContext from "../../../../../../components/global/globalContext";
import useForm from "../../../../../../components/hooks/useForm";
import "./StyledCards.css"

export default function ListProdCard(props) {
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let destaques = data.destaques
    let galerias = data.galerias
    let produtos = data.produtos
    let parametros = data.parametros
    let usuarios = data.usuarios
    let videos = data.videos
    let setInfoOpen = props.setInfoOpen
    let setProdSel = props.setProdSel
    let prodSel = props.prodSel
console.log('prod SEL',prodSel.telefone)
    const [formEditInfo, onChangeEditInfo, clearEditInfo] = useForm({ telefone: prodSel.telefone, celular: prodSel.celular, email: prodSel.email, endereco: prodSel.endereco })

    const AddAdmin = (ev) => {
        ev.preventDefault()
        // newGaleryBD(formGalery)
        //console.log("form", formAddProduto)
        clearEditInfo()
    }

    const openProdToEdit=(prod)=>{
        setInfoOpen(true)
        setProdSel(prod)
    }

    const listGal = galerias && galerias
    .map((gal) => {
        return <div key={gal.id} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(gal)} className="position-name-edit-or-delete">{gal.nome}</div>
        <strong className="button-delete">X</strong>
    </div>
    })

    const listProd = produtos && produtos
    .map((prod) => {
        return <div key={prod.id} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(prod)} className="position-name-edit-or-delete">{prod.nome}</div>
        <strong className="button-delete">X</strong>
    </div>
    })

    const listUsers = usuarios && usuarios
    .map((user) => {
        return <div key={user.nome} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(user)} className="position-name-edit-or-delete">{user.nome}</div>
        <strong className="button-delete">X</strong>
    </div>
    })

    const listVideos = videos && videos
    .map((video) => {
        return <div key={video.nome} className="body-position-to-edit-or-delete">
        <div onClick={()=>openProdToEdit(video)} className="position-name-edit-or-delete">{video.nome}</div>
        <strong className="button-delete">X</strong>
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
                            <div onClick={()=>openProdToEdit(destaques[0])} className="position-name-edit">{destaques[0].nome}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">2</div>
                            <div onClick={()=>openProdToEdit(destaques[1])} className="position-name-edit">{destaques[1].nome}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">3</div>
                            <div onClick={()=>openProdToEdit(destaques[2])} className="position-name-edit">{destaques[2].nome}</div>
                        </div>
                        <div className="body-position-to-edit">
                            <div className="position-to-edit">4</div>
                            <div onClick={()=>openProdToEdit(destaques[3])} className="position-name-edit">{destaques[3].nome}</div>
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
            return <div>
                 <form onSubmit={() => AddAdmin()} className="form-Subsection3">
                    <div>Preencha apenas o que deseja editar</div>
                <input
                    placeholder={"Telefone"}
                    type='telefone'
                    name="telefone"
                    value={formEditInfo.telefone}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                />
                <input
                    placeholder={"Celular"}
                    type='celular'
                    name="celular"
                    value={formEditInfo.celular}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                />
                <input
                    placeholder={"Email"}
                    type='email'
                    name="email"
                    value={formEditInfo.email}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                />
                <input
                    placeholder={"Endereço"}
                    type='endereco'
                    name="endereco"
                    value={formEditInfo.endereco}
                    onChange={onChangeEditInfo}
                    className="input-Subsection3"
                />
                

                <button>Editar</button>

            </form>

            <div>
                <strong>Informações Atuais</strong>
                <div>Telefone: {parametros && parametros[0].telefone}</div>
                <div>Celular: {parametros && parametros[0].celular}</div>
                <div>Email: {parametros && parametros[0].email}</div>
                <div>Endereço: {parametros && parametros[0].endereco}</div>
            </div>
            </div>
        } else if (toEdit === "USUÁRIO") {
            return <div>
            <strong>Selecione o usuário que deseja editar</strong>
            <div className="container-list-to-edit">
                <div className="title-list-to-edit-or-delete">
                    <div className="title-position-to-edit">Editar</div>
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