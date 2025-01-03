import { StatusRepo } from "../repository/statusRepo.js";

export class StausController{

    constructor(){
       this.statusRepo = new StatusRepo()
    }
   async updateStaus(req,res,next){
    const {habitId, date, status} = req.body;
    try{
    this.statusRepo.updateStaus(habitId, date, status)
    res.redirect('/habits');
    }catch(error){
        console.log(error)
    }
}

async getHabit(req,res,next){
    const {habitId} = req.params;
    try{
        let response = await this.statusRepo.getHabit(habitId)
        let {habit,statuses} = response
        res.render('habitDetails',{habit,statuses})
    }catch(err){
        console.log(err)
    }
    
}

}
