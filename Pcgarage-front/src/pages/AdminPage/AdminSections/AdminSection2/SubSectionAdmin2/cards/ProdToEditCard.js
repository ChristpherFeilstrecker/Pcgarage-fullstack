import { useContext } from "react";
import GlobalContext from "../../../../../../components/global/globalContext";
import useForm from "../../../../../../components/hooks/useForm";

export default function ProdToEditCard(props) {
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let galerias = data.galerias
    let prodSel = props.prodSel
    console.log("prosel", prodSel)

    /*
        const imgDesta = galerias && galerias
            .filter((product) => {
                if (search === "TODOS PRODUTOS") {
                    return (product)
                } else { return (product.nome.toUpperCase().includes(search.toUpperCase())); }
    
            })
            .map((product) => {
                return <CardProducts key={product.id} product={product} showDetailProduct={showDetailProduct} />
            })
            */

    // destaque para editar
    const [formEditDestaque, onChangeEditDestaque, clearEditDestaque] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao, preco: prodSel.preco, imagem: prodSel.imagem })

    const editDestaque = (ev) => {
        ev.preventDefault()
        // newGaleryBD(formGalery)
        //console.log("form", formAddProduto)
        clearEditDestaque()
    }

    // produto para editar
    const [formEditProduto, onChangeEditProduto, clearEditProduto] = useForm({ id_galeria: prodSel.id_galeria, nome: prodSel.nome, descricao: prodSel.descricao, observacao: prodSel.observacao, imagem1: "", imagem2: "", imagem3: "", imagem4: "", imagem5: "" })

    const editProduto = (ev) => {
        ev.preventDefault()
        // newGaleryBD(formGalery)
        //console.log("form", formAddProduto)
        clearEditProduto()
    }

    const img2 = () => {

        if (prodSel.imagem2) {
            return <div className="container-img">Imagem 2:
                <img className="actual-img" src={prodSel && prodSel.imagem2} alt="img" />
                <strong className="button-delete">X</strong>
            </div>
        }
    }

    const img3 = () => {

        if (prodSel.imagem3) {
            return <div className="container-img">Imagem 3:
                <img className="actual-img" src={prodSel && prodSel.imagem3} alt="img" />
                <strong className="button-delete">X</strong>
            </div>
        }
    }

    const img4 = () => {

        if (prodSel.imagem4) {
            return <div className="container-img">Imagem 4:
                <img className="actual-img" src={prodSel && prodSel.imagem4} alt="img" />
                <strong className="button-delete">X</strong>
            </div>
        }
    }

    const img5 = () => {

        if (prodSel.imagem5) {
            return <div className="container-img">Imagem 5:
                <img className="actual-img" src={prodSel && prodSel.imagem5} alt="img" />
                <strong className="button-delete">X</strong>
            </div>
        }
    }

    // video para editar
    const [formEditVideo, onChangeEditVideo, clearEditVideo] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao, observacao: prodSel.observacao, url: prodSel.url })

    const editVideo = (ev) => {
        ev.preventDefault()
        // newGaleryBD(formGalery)
        //console.log("form", formAddProduto)
        clearEditVideo()
    }

    // usuário para editar
    const [formEditUser, onChangeEditUser, clearEditUser] = useForm({ nome: prodSel.nome, senha: prodSel.senha })

    const editUser = (ev) => {
        ev.preventDefault()
        // newGaleryBD(formGalery)
        //console.log("form", formAddProduto)
        clearEditUser()
    }

    const prodToEdit = () => {
        if (toEdit === "DESTAQUES") {
            return <div className="product-to-edit">

                <form onSubmit={() => editDestaque()} className="form-Subsection4">
                    <strong>Editar destaque {prodSel && prodSel.id}</strong>
                    <div>Titulo:</div>
                    <input
                        placeholder={"nome"}
                        type='nome'
                        name="nome"
                        value={formEditDestaque.nome}
                        onChange={onChangeEditDestaque}
                        className="input-Subsection3"
                    />
                    <div>Descrição:</div>
                    <input
                        placeholder={"Descrição"}
                        type='descricao'
                        name="descricao"
                        value={formEditDestaque.descricao}
                        onChange={onChangeEditDestaque}
                        className="input-Subsection3"
                    />
                    <div>Preço:</div>
                    <input
                        placeholder={"Preço"}
                        type='preco'
                        name="preco"
                        value={formEditDestaque.preco}
                        onChange={onChangeEditDestaque}
                        className="input-Subsection3"
                    />
                    <div>Imagem:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />
                    <div className="btn-save">
                        <button >Salvar</button>
                    </div>


                </form>

                <div className="info-actual">

                    <div className="container-img">Imagem:
                        <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                    </div>
                </div>
            </div>
        } else if (toEdit === "PRODUTOS") {
            return <div className="product-to-edit">
                <form onSubmit={() => editProduto()} className="form-Subsection3">
                    <strong>EDITAR PRODUTO: {prodSel && prodSel.nome}</strong>
                    <div>ID da galeria:</div>
                    <input
                        placeholder={"ID da Galeria"}
                        type='id_galeria'
                        name="id_galeria"
                        value={formEditProduto.id_galeria}
                        onChange={onChangeEditProduto}
                        className="input-Subsection3"
                    />
                    <div>Nome:</div>
                    <input
                        placeholder={"Nome"}
                        type='nome'
                        name="nome"
                        value={formEditProduto.nome}
                        onChange={onChangeEditProduto}
                        className="input-Subsection3"
                    />
                    <div>Descrição:</div>
                    <input
                        placeholder={"Descrição"}
                        type='descricao'
                        name="descricao"
                        value={formEditProduto.descricao}
                        onChange={onChangeEditProduto}
                        className="input-Subsection3"
                    />
                    <div>Observação:</div>
                    <input
                        placeholder={"Observação"}
                        type='observacao'
                        name="observacao"
                        value={formEditProduto.observacao}
                        onChange={onChangeEditProduto}
                        className="input-Subsection3"
                    />
                    <div>Imagem 1:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />
                    <div>Imagem 2:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />
                    <div>Imagem 3:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />
                    <div>Imagem 4:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />
                    <div>Imagem 5:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />


                    <button>Salvar</button>

                </form>

                <div className="info-actual">

                    <div className="container-img">Imagem 1:
                        <img className="actual-img" src={prodSel && prodSel.imagem1} alt="img" />
                    </div>

                    {img2()}
                    {img3()}
                    {img4()}
                    {img5()}


                </div>
            </div>
        } else if (toEdit === "GALERIAS") {
            return <div className="product-to-edit">
                <form onSubmit={() => editDestaque()} className="form-Subsection3">
                    <strong>EDITAR GALERIA: {prodSel && prodSel.nome}</strong>
                    <div>Nome:</div>
                    <input
                        placeholder={"Nome"}
                        type='nome'
                        name="nome"
                        value={formEditDestaque.nome}
                        onChange={onChangeEditDestaque}
                        className="input-Subsection3"
                    />
                    <div>Descrição:</div>
                    <input
                        placeholder={"Descrição"}
                        type='descricao'
                        name="descricao"
                        value={formEditDestaque.descricao}
                        onChange={onChangeEditDestaque}
                        className="input-Subsection3"
                    />
                    <div>Imagem:</div>
                    <input
                        type="file"
                        name="img"
                        className="input-Subsection3"
                        required
                    />


                    <button>Salvar</button>

                </form>

                <div className="info-actual">

                    <div className="container-img">Imagem:
                        <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                    </div>
                </div>
            </div>
        } else if (toEdit === "VIDEOS") {
            return <div className="product-to-edit">
                <form onSubmit={() => editVideo()} className="form-Subsection3">
                    <strong>EDITAR VIDEO: {prodSel && prodSel.nome}</strong>
                    <div>Titulo:</div>
                    <input
                        placeholder={"Nome"}
                        type='nome'
                        name="nome"
                        value={formEditVideo.nome}
                        onChange={onChangeEditVideo}
                        className="input-Subsection3"
                    />
                    <div>Descrição:</div>
                    <input
                        placeholder={"Descrição"}
                        type='descricao'
                        name="descricao"
                        value={formEditVideo.descricao}
                        onChange={onChangeEditVideo}
                        className="input-Subsection3"
                    />
                    <div>url:</div>
                    <input
                        placeholder={"url"}
                        type='url'
                        name="url"
                        value={formEditVideo.url}
                        onChange={onChangeEditVideo}
                        className="input-Subsection3"
                    />



                    <button>Salvar</button>

                </form>

                <div className="info-actual">


                    <div className="container-img">Video/url:
                        <iframe width="380" height="200" src={prodSel && prodSel.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        } else if (toEdit === "INFORMAÇÕES") {
            return <div>informações para editar</div>
        } else if (toEdit === "USUÁRIO") {
            return <div className="product-to-edit">
                <form onSubmit={() => editUser()} className="form-Subsection3">
                    <strong>EDITAR USUÁRIO: {prodSel && prodSel.nome}</strong>
                    <div>Nome:</div>
                    <input
                        placeholder={"Nome"}
                        type='nome'
                        name="nome"
                        value={formEditUser.nome}
                        onChange={onChangeEditUser}
                        className="input-Subsection3"
                    />
                    <div>Senha:</div>
                    <input
                        placeholder={"Senha"}
                        type='senha'
                        name="senha"
                        value={formEditUser.senha}
                        onChange={onChangeEditUser}
                        className="input-Subsection3"
                    />

                    <button>Salvar</button>

                </form>

                <div className="info-actual">


                </div>
            </div>
        }
    }

    return (
        <div className="product-to-edit-card">
            {prodToEdit()}
        </div>
    )
}