import express from "express";
import { StausController } from "../controller/status.controller.js";
const router = express.Router();
 const statusController = new StausController();
router.post('/update',(req,res,next)=>statusController.updateStaus(req,res,next));
router.get('/:habitId',(req,res,next)=>statusController.getHabit(req,res,next))

export {router as statusRoutes};
