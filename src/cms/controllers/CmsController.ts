import {Cms} from "../models/cms";
import {getRepository} from "typeorm";
import express from "express";

const CmsController = {
    createCms: async (req: express.Request, res: express.Response) => {
        const cms = getRepository(Cms);
        let {key, value} = req.body;
         const newCms = cms.create({
            "key": key,
            "value": value
        });
        await cms.save(newCms);
        return res.send(cms);
    },
    getCms: async (req: express.Request, res: express.Response) => {
        let data = await getRepository(Cms).find()
        return res.send({"data": data})
    }
}
export default CmsController;
