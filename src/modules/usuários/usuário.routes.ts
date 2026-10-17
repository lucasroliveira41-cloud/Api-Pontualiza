import {Router} from "express";
import  Express  from "express";
import UsuarioController from "./usuários.controller.js";

const usuarioRouter = Router();

usuarioRouter.post("/", UsuarioController.createUsers);
usuarioRouter.get("/", UsuarioController.findUsers);

export default usuarioRouter;