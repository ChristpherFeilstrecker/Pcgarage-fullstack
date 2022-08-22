import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../../../components/constants/BaseURL";
import { FILE_BASE_URL } from "../../../../../../components/constants/FileBaseUrl";
import { UPLOAD_BASE_URL } from "../../../../../../components/constants/UploadBaseUrl";
import GlobalContext from "../../../../../../components/global/globalContext";
import EditRequestData from "../../../../../../components/hooks/EditRequestData";
import useForm from "../../../../../../components/hooks/useForm";

export default function ProdToEditCard(props) {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let toEdit = data.toEdit
    let prodSel = props.prodSel
    let [message, setMessage] = useState("")

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

    const galerias = useRequestData(BASE_URL + "/galerias")

    const goToApp = () => {
        navigate("/admin/painel_de_controle")
    }


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
    const [formEditDestaque, onChangeEditDestaque] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao, preco: prodSel.preco })

    const [imageEditDestaque, setImageEditDestaque] = useState("")

    const EditDestaquesBD = (body) => {
        
        EditRequestData(BASE_URL + "/editardestaque", body)

        document.getElementById("inputFile").value = "";
        setMessage("Destaque editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }


    let editDestaque = async e => {
        e.preventDefault()
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditDestaque.nome,
            descricao: formEditDestaque.descricao,
            preco: formEditDestaque.preco,
            imagem: prodSel && prodSel.imagem
        }

        if (imageEditDestaque !== "") {
            const formData = new FormData();
            formData.append('image', imageEditDestaque);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => { 
                    body.imagem = FILE_BASE_URL+response.data
                }).catch((err) => {
                    
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        
        EditDestaquesBD(body)

    }


    //Fim editar destaque

    //Galeria para editar

    const [formEditGaleria, onChangeEditGaleria] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao })

    const [imageEditGaleria, setImageEditGaleria] = useState("")

    const EditGaleriaBD = (url) => {
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditGaleria.nome,
            descricao: formEditGaleria.descricao,
            preco: formEditGaleria.preco,
            imagem: prodSel && prodSel.imagem
        }
        

        if (url) {
            body.imagem = url
        }
        
        EditRequestData(BASE_URL + "/editargaleria", body)
        document.getElementById("inputFile").value = "";
        setMessage("Galeria editada com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }


    let editGaleria = async e => {
        e.preventDefault()
        let url = false
        if (imageEditGaleria !== "") {
            const formData = new FormData();
            formData.append('image', imageEditGaleria);

            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    
                    url = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        
        EditGaleriaBD(url)

    }

    // Fim editar galeria

    // produto para editar

    const [formEditProduto, onChangeEditProduto] = useForm({ id_galeria: prodSel.id_galeria, nome: prodSel.nome, descricao: prodSel.descricao, observacao: prodSel.observacao})
    const [idGaleriaProduto, setIdGaleriaProduto] = useState("")
    const [image1EditProduto, setImage1EditProduto] = useState("")
    const [image2EditProduto, setImage2EditProduto] = useState("")
    const [image3EditProduto, setImage3EditProduto] = useState("")
    const [image4EditProduto, setImage4EditProduto] = useState("")
    const [image5EditProduto, setImage5EditProduto] = useState("")

    let updateIdGalery = (ev) => {
        setIdGaleriaProduto(ev.target.value)
    }

    //lista as galerias para selecionar id
    let idGaleryList = galerias && galerias
        .map((gal) => {
            return <option key={gal.id} value={gal.id}>{gal.nome}</option>

        })

    const EditProdutoBD = (url1,url2,url3,url4,url5) => {
        let body = {
            id:prodSel && prodSel.id,
            id_galeria: formEditProduto.id_galeria,
            nome: formEditProduto.nome,
            descricao: formEditProduto.descricao,
            observacao: formEditProduto.observacao,
            imagem1: prodSel && prodSel.imagem1,
            imagem2: prodSel && prodSel.imagem2,
            imagem3: prodSel && prodSel.imagem3,
            imagem4: prodSel && prodSel.imagem4,
            imagem5: prodSel && prodSel.imagem5
        }
        if(idGaleriaProduto){
            body.id_galeria = idGaleriaProduto
        }

        if (url1) {
            body.imagem1 = url1
        }
        if (url2) {
            body.imagem2 = url2
        }
        if (url3) {
            body.imagem3 = url3
        }
        if (url4) {
            body.imagem4 = url4
        }
        if (url5) {
            body.imagem5 = url5
        }
       
        EditRequestData(BASE_URL + "/editarproduto", body)
        document.getElementById("inputFile").value = "";
        setMessage("Produto editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)
    }


    let editProduto = async e => {
        e.preventDefault()
        let url1 = false
        let url2 = false
        let url3 = false
        let url4 = false
        let url5 = false

        if (image1EditProduto !== "") {
            const formData = new FormData();
            formData.append('image', image1EditProduto);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    url1 = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        if (image2EditProduto !== "") {
            const formData = new FormData();
            formData.append('image', image2EditProduto);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    url2 = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        if (image3EditProduto !== "") {
            const formData = new FormData();
            formData.append('image', image3EditProduto);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    url3 = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        if (image4EditProduto !== "") {
            const formData = new FormData();
            formData.append('image', image4EditProduto);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    url4 = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        if (image5EditProduto !== "") {
            const formData = new FormData();
            formData.append('image', image5EditProduto);
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(UPLOAD_BASE_URL+"/upload", formData, headers)
                .then((response) => {
                    url5 = FILE_BASE_URL + response.data
                }).catch((err) => {
                    setMessage("Erro ao coletar imagem, formatos aceitos, JPG, PNG e JPEG");
                })
        }
        
        EditProdutoBD(url1,url2,url3,url4,url5)

    }
    // fim editar produtos

    // Excluir imagem de produto

    const DeleteImgProdBD = (id,pos) => {
       let body={
            id:id,
            imagem:pos
        }
 
        EditRequestData(BASE_URL + `/deletarimgproduto`,body)

        setTimeout(() => {
         document.location.reload(true);
        }, 1000)

    }

    //fim excluir imagem de produto


    //retorna imagens 2,3,4 e 5 do produto se existir
    const img2 = () => {

        if (prodSel.imagem2) {
            return <div className="container-img">Imagem Atual 2:
                <img className="actual-img" src={prodSel && prodSel.imagem2} alt="img" />
                <strong onClick={()=>DeleteImgProdBD(prodSel.id,"imagem2")} className="button-delete">X</strong>
            </div>
        }
    }

    const img3 = () => {

        if (prodSel.imagem3) {
            return <div className="container-img">Imagem Atual 3:
                <img className="actual-img" src={prodSel && prodSel.imagem3} alt="img" />
                <strong onClick={()=>DeleteImgProdBD(prodSel.id,"imagem3")} className="button-delete">X</strong>
            </div>
        }
    }

    const img4 = () => {

        if (prodSel.imagem4) {
            return <div className="container-img">Imagem Atual 4:
                <img className="actual-img" src={prodSel && prodSel.imagem4} alt="img" />
                <strong onClick={()=>DeleteImgProdBD(prodSel.id,"imagem4")} className="button-delete">X</strong>
            </div>
        }
    }

    const img5 = () => {

        if (prodSel.imagem5) {
            return <div className="container-img">Imagem Atual 5:
                <img className="actual-img" src={prodSel && prodSel.imagem5} alt="img" />
                <strong onClick={()=>DeleteImgProdBD(prodSel.id,"imagem5")} className="button-delete">X</strong>
            </div>
        }
    }
    //Fim editar produto

    // video para editar
    const [formEditVideo, onChangeEditVideo] = useForm({ nome: prodSel.nome, descricao: prodSel.descricao, url: prodSel.url })

    const EditVideoBD = e => {
        e.preventDefault()
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditVideo.nome,
            descricao: formEditVideo.descricao,
            url: formEditVideo.url,
        }
        
        EditRequestData(BASE_URL + "/editarvideo", body)

        setMessage("Video editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

    //fim editar video

    // Admin para editar
    const [formEditAdmin, onChangeEditAdmin] = useForm({ nome: prodSel.nome, password: prodSel.senha })

    const EditAdminBD = e => {
        e.preventDefault()
        let body = {
            id:prodSel && prodSel.id,
            nome: formEditAdmin.nome,
            senha: formEditAdmin.password,
        }
        
        EditRequestData(BASE_URL + "/editaradmin", body)

        setMessage("Administrador editado com sucesso");
        setTimeout(() => {
            setMessage("")
            document.location.reload(true);
        }, 1000)

    }

    // fim editar admin

    //Listagem de inputs
    const prodToEdit = () => {
        if (toEdit === "DESTAQUES") {
            return <div className="product-to-edit">
                <form onSubmit={editDestaque} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome do Destaque:</label>
                        <input
                            placeholder={"Nome do Destaque*"}
                            type='nome'
                            name="nome"
                            value={formEditDestaque.nome}
                            onChange={onChangeEditDestaque}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <input
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditDestaque.descricao}
                            onChange={onChangeEditDestaque}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Preço:</label>
                        <input
                            placeholder={"Preço*"}
                            type='preco'
                            name="preco"
                            value={formEditDestaque.preco}
                            onChange={onChangeEditDestaque}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Editar Imagem:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImageEditDestaque(e.target.files[0])}

                    />
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                <div>{message}</div>
                <div>
                    <button onClick={() => goToApp()}>voltar</button>
                </div>

                <div className="info-actual">
                    <div className="container-img">Imagem Atual:
                        <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                    </div>
                </div>
            </div>
        } else if (toEdit === "PRODUTOS") {
            return <div className="product-to-edit2">
                 <form onSubmit={editProduto} className="form-Subsection3">
                 <div className="flex-container" >
                        <label>Galeria:</label>

                        <select name="idgaleria" value={idGaleriaProduto} onChange={updateIdGalery} >
                            <option value="">Selecionar galeria</option>
                            {idGaleryList}
                        </select>
                    </div>
                    <div className="flex-container" >
                        <label>Nome do Produto:</label>
                        <input
                            placeholder={"Nome do Produto*"}
                            type='nome'
                            name="nome"
                            value={formEditProduto.nome}
                            onChange={onChangeEditProduto}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <input
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditProduto.descricao}
                            onChange={onChangeEditProduto}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Observação:</label>
                        <input
                            placeholder={"Observação*"}
                            type='observacao'
                            name="observacao"
                            value={formEditProduto.observacao}
                            onChange={onChangeEditProduto}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>Editar Imagem 1:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage1EditProduto(e.target.files[0])}

                    />
                    <div className="flex-container" >
                        <label>Editar Imagem 2:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage2EditProduto(e.target.files[0])}

                    />
                    <div className="flex-container" >
                        <label>Editar Imagem 3:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage3EditProduto(e.target.files[0])}

                    />
                    <div className="flex-container" >
                        <label>Editar Imagem 4:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage4EditProduto(e.target.files[0])}

                    />
                    <div className="flex-container" >
                        <label>Editar Imagem 5:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImage5EditProduto(e.target.files[0])}

                    />
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                  <div>{message}</div>  
                </form>
                

                <div className="info-actual2">
                <strong>Excluir Imagem</strong>
                <div className="title-list-to-edit-or-delete2">
                    <div className="title-position-to-edit"></div>
                    <div>Excluir</div>
                </div>
                    
                    <div className="container-img">Imagem Atual 1:
                        <img className="actual-img" src={prodSel && prodSel.imagem1} alt="img" />
                        <div>obs.:1ª imagem não pode ser excluida, só editada</div>
                    </div>
                    {img2()}
                    {img3()}
                    {img4()}
                    {img5()}

                </div>
            </div>
        } else if (toEdit === "GALERIAS") {
            return <div className="product-to-edit">
               <form onSubmit={editGaleria} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome da Galeria:</label>
                        <input
                            placeholder={"Nome da galeria*"}
                            type='nome'
                            name="nome"
                            value={formEditGaleria.nome}
                            onChange={onChangeEditGaleria}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <input
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditGaleria.descricao}
                            onChange={onChangeEditGaleria}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    
                    <div className="flex-container" >
                        <label>Editar Imagem:</label>
                    </div>
                    <input
                        id="inputFile"
                        type="file"
                        name="image"
                        className="input-Subsection3"
                        onChange={e => setImageEditGaleria(e.target.files[0])}

                    />
                    <div className="btn-container" >
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                <div>{message}</div>
                <div>
                    <button onClick={() => goToApp()}>voltar</button>
                </div>

                <div className="info-actual">
                    <div className="container-img">Imagem Atual:
                        <img className="actual-img" src={prodSel && prodSel.imagem} alt="img" />
                    </div>
                </div>
            </div>
        } else if (toEdit === "VIDEOS") {
            return <div className="product-to-edit">
                 <form onSubmit={EditVideoBD} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome do Video:</label>
                        <input
                            placeholder={"Nome do Video*"}
                            type='nome'
                            name="nome"
                            value={formEditVideo.nome}
                            onChange={onChangeEditVideo}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Descrição:</label>
                        <input
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditVideo.descricao}
                            onChange={onChangeEditVideo}
                            className="input-Subsection3"
                            required
                        />
                    </div>
                    <div className="flex-container" >
                        <label>url:</label>
                        <input
                            placeholder={"Descrição*"}
                            type='descricao'
                            name="descricao"
                            value={formEditVideo.url}
                            onChange={onChangeEditVideo}
                            className="input-Subsection3"
                            required
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

                <div className="info-actual">
                    <div className="container-img">Video Atual:
                       <iframe width="380" height="200" src={prodSel && prodSel.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                </div>
              
            </div>
        } else if (toEdit === "USUÁRIO") {
            return <div className="product-to-edit">
               <form onSubmit={EditAdminBD} className="form-Subsection3">
                    <div className="flex-container" >
                        <label>Nome:</label>
                        <input
                            placeholder={"Nome do Administrador*"}
                            type='nome'
                            name="nome"
                            value={formEditAdmin.nome}
                            onChange={onChangeEditAdmin}
                            className="input-Subsection3"
                            required
                        /></div>
                    <div className="flex-container" >
                        <label>Senha:</label>
                        <input
                            placeholder={"Senha*"}
                            type='password'
                            name="password"
                            value={formEditAdmin.password}
                            onChange={onChangeEditAdmin}
                            className="input-Subsection3"
                            required
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
            </div>
        }
    }

    //retorno

    return (
        <div className="product-to-edit-card">
            {prodToEdit()}
        </div>
    )
}