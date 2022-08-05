import cors from "cors";
import { AddressInfo } from "net";
import express from "express";
import { PCGarageRouter } from "./routes/PCGarageRouter";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
})


app.use("/files", express.static("src/uploads"));

app.use("/",PCGarageRouter);


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});

