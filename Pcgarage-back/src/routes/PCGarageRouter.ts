import express from "express";
import { InformationController } from "../controller/InformationController";
import { HighlightsController } from "../controller/HighlightsController";
import { GalleriesController } from "../controller/GalleriesController";
import { ProductsController } from "../controller/ProductsController";
import { VideosController } from "../controller/VideosController";
import { AdminController } from "../controller/AdminController";
import multer from 'multer';
import { storage } from '../multerConfig'
import path from 'path'


export const PCGarageRouter = express.Router();

const upload = multer({ storage: storage }) ;

const informationController = new InformationController();
const highlightsController = new HighlightsController();
const galleriesController = new GalleriesController();
const productsController = new ProductsController();
const videosController = new VideosController();
const adminController = new AdminController();

// PCGarageRouter.get("/", 
// (a,b) => {
//     b.send('<p>teste back PC garage</p>');
// }
// );


PCGarageRouter.get("/admin", adminController.admin);//Retorna email e senha administrador - OK(Funcional)
PCGarageRouter.post("/addadmin", adminController.addadmin); //cria admin - OK(FUNCIONAL)
PCGarageRouter.post("/login", adminController.login); // login - retorna token - OK(FUNCIONAL)

PCGarageRouter.get("/destaques", highlightsController.highlights);//Retorna destaques - OK(Funcional)
PCGarageRouter.put("/editardestaque", highlightsController.editHighlights); //Editar destaque - OK(Funcional)

PCGarageRouter.get("/informacoes", informationController.information);//Retorna informacoes - OK(Funcional)
PCGarageRouter.put("/editarinformacoes", informationController.editInformation); //Editar informações - OK (Funcional)


PCGarageRouter.get("/galerias", galleriesController.galleries);//Retorna galerias - OK(Funcional)
PCGarageRouter.post("/addgaleria", galleriesController.addGallerie); //Adicionar galeria - OK (Funcional)
PCGarageRouter.put("/editargaleria", galleriesController.editGallerie); //Editar galeria - OK (Funcional)
PCGarageRouter.delete("/deletargaleria", galleriesController.deleteGallerie); //Deletar galeria - OK (Funcional)

PCGarageRouter.get("/produtos", productsController.products);//Retorna produtos - OK(Funcional)
PCGarageRouter.post("/addproduto", productsController.addProduct); //Adicionar produto - OK (Funcional)
PCGarageRouter.put("/addimgproduto", productsController.addImgProduct);// Adicionar imagem a produto -
PCGarageRouter.put("/editarproduto", productsController.editProduct); //Editar produto - OK (Funcional)
PCGarageRouter.put("/deletarimgproduto", productsController.deleteImgProduct); //Deletar uma imagem de 1 produtogit add . (funcional)
PCGarageRouter.delete("/deletarproduto", productsController.deleteProduct); //Deletar produto - OK (Funcional)

PCGarageRouter.get("/videos", videosController.videos);//Retorna videos - OK(Funcional)
PCGarageRouter.post("/addvideo", videosController.addVideo); //Adicionar video

PCGarageRouter.post("/upload", upload.single('image'), async (req,res)=>{
   console.log(req.file)
    if(req.file){
        return res.json(req.file?.filename)
    }
})

/*
PCGarageRouter.post("/upload", upload.single('file'), (req,res)=>{
    return res.json(req.file?.filename)
})
*/