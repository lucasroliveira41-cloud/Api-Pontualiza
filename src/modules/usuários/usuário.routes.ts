import {Router} from "express";
import  Express  from "express";
import UsuarioController from "./usuários.controller.js";

const usuarioRouter = Router();

usuarioRouter.post("/", UsuarioController.createUsers.bind(UsuarioController));
usuarioRouter.get("/", UsuarioController.findUsers.bind(UsuarioController));

export default usuarioRouter;