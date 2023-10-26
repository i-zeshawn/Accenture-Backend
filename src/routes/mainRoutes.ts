import express from "express";
import CmsRoutes from "../cms/routes/CmsRoutes";

const mainRouter = express.Router();
mainRouter.use('/cms', CmsRoutes);

export default mainRouter;
