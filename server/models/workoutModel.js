const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const MONGO_URI = 'mongodb+srv://katalystkat:2Nf3g8BgmGnkqQiM@fitdevs.s392t6z.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'FitDevs'
})
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    username: {type: String, required: true},
    activityName: {type: String, required: true},
    activityMetric: {type: Number, required: true},
    activityDescription : {type: String, required: true},
    date: {type: Number, required: true},
})

const Workout = new mongoose.model('Workout', workoutSchema);

module.exports = { Workout };