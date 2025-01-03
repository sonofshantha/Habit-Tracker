import { Habit } from "../model.js/habitSchema.js";
export class HabitRepo{

   async addHabit(name){
       const habit = new Habit({
        name:name
       })
       let ret = await habit.save();
       return ret;
    }
    async getHabbit(){
        const habits = await Habit.find();
        return habits;
    }
}