import express from "express";
import CmsController from "../controllers/CmsController";


const cmsRoutes = express.Router();


cmsRoutes.get('/getCmsData}', CmsController.getCms)

export default cmsRoutes;
