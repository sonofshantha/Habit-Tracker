import { Habit } from "../model.js/habitSchema.js";
import Status from "../model.js/status.js";
export class StatusRepo{
    async updateStaus(habitId, date, status){
        let newDate = new Date(date);
       let formattedDate = newDate.toISOString().split('T')[0];
        let existingStatus = await Status.findOne({ habit: habitId,date:formattedDate});
        if (existingStatus) {
            existingStatus["status"] = status;
            await existingStatus.save();
          } else {
            const newStatus = new Status({ habit: habitId, date:formattedDate, status });
            await newStatus.save();
          }
    }
    async getHabit(habitId){
        const habit = await Habit.findById(habitId);
        let sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate()-6)
        const statuses = await Status.find({
            habit:habit._id,
            date:{$gte:sevenDaysAgo}
        }).sort({date:1})
        return {habit,statuses};
    }
}