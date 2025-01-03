
import express from "express";
import { HabitController } from "../controller/habit.controller.js";
const router = express.Router();
  const habitController = new HabitController();

router.post('/add',(req,res,next)=>habitController.addHabit(req,res,next))
router.get('/',(req,res,next)=>habitController.getHabbit(req,res,next))

export {router as habitRouter}