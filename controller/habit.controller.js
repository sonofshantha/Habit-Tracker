
import { HabitRepo } from "../repository/habitRepo.js"
import { StatusRepo } from "../repository/statusRepo.js";

let statusRepo = new StatusRepo();
export class HabitController{
    constructor(){
      this.habitRepo = new HabitRepo()
    }
    async addHabit(req,res,next){
      let promiseArray = [];
      try{
          let habit =  await this.habitRepo.addHabit(req.body.name);
          const date = new Date(Date.now());
            for(let i=0;i<=5;i++){
              let oneDayBefore = new Date(date);
              oneDayBefore.setDate(oneDayBefore.getDate() - i);
                  let formattedDate = oneDayBefore.toISOString();
                  formattedDate = formattedDate.replace('Z', '+00:00');
                  promiseArray.push(statusRepo.updateStaus(habit._id, formattedDate, "None"))
            }
            await Promise.all(promiseArray)
             res.redirect('/habits')
      }catch(error){
          console.log(error)
      }
    }
    async getHabbit(req,res,next){
      try{
        let habits = await this.habitRepo.getHabbit()
        let promiseArray = []
        habits.forEach(element => {
          promiseArray.push(statusRepo.getHabit(element._id))
        });
        let concatVal = await Promise.all(promiseArray);
         res.render('index', { concatVal });
      }catch(err){
        console.log(err)
      }
       
    }
}