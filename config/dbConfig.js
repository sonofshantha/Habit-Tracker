import mongoose from 'mongoose';
// MongoDB connection
const dbConnect = function(){mongoose.connect('mongodb://localhost/habit-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));
}

    export default dbConnect;