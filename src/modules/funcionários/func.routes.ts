import {Router} from "express";
import  Express  from "express";
import FuncController from "./func.controller.js";

const FuncRouter = Router();

FuncRouter.post("/", FuncController.createUsers);
FuncRouter.get("/", FuncController.findUsers);

export default FuncRouter;