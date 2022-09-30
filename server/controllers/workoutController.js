const e = require('express');
const mongoose = require('mongoose');
const workoutModel = require('../models/workoutModel')
const workoutController = {};

workoutController.logWorkout = (req, res, next) => {
    const { dateInput, userNameInput, activityNameInput, activityMetricInput, activityDescriptionInput } = req.body;
    workoutModel.Workout.create({
        username : userNameInput,
        date: dateInput,
        activityName : activityNameInput, 
        activityMetric : activityMetricInput, 
        activityDescription : activityDescriptionInput,
    }, (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log('new workout logged');
        res.locals.data = data;
        res.status(200).json(res.locals.data);
    })
}

workoutController.getWorkouts = (req, res, next) => {
    workoutModel.Workout.find({
        username: req.body.userNameInput
    }, (err, data) => {
        if (err) return next(err);
        res.status(200).json(data);

    })
}

module.exports = workoutController;