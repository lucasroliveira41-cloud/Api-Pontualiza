import AdminController from "./admin.controller.js";
import { Router } from "express";

const AdminRouter = Router();

AdminRouter.post("/",AdminController.criarAdmin);
AdminRouter.get("/",AdminController.findAdmin);
AdminRouter.get("/:id",AdminController.findAdminById);
AdminRouter.put("/:id",AdminController.updateAdmin);
AdminRouter.delete("/:id",AdminController.deleteAdmin);

export default AdminRouter;