import {Router} from "express";
import  Express  from "express";
import FuncController from "./func.controller.js";

const FuncRouter = Router();

FuncRouter.post("/", FuncController.createUsers);
FuncRouter.get("/", FuncController.findUsers);
FuncRouter.get("/:id", FuncController.findUsersById);
FuncRouter.put("/:id", FuncController.updateUser);
FuncRouter.delete("/:id", FuncController.deleteUser);

export default FuncRouter;