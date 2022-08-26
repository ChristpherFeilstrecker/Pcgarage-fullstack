import cors from "cors";
import { AddressInfo } from "net";
import express from "express";
import { PCGarageRouter } from "./routes/PCGarageRouter";
import dotenv from "dotenv";
//import path from "path"
dotenv.config();
const app = express();

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
})

const path = require('path')

app.use(express.json());

// libera acesso aos arquivos
app.use("/files", express.static(`src/uploads`));

app.use("/app",PCGarageRouter);


//teste para retornar página estática SPA fora da rota principal
/*
app.use(express.static(path.join(__dirname, 'build')));

+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});
*/

const server = app.listen(process.env.PORT || 21046, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em ${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
})
//http://localhost:
