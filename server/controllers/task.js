var express = require('express');
var router = express.Router();
let task = require('../models/task');

module.exports.DislayTasklist = async (req,res,next)=>{
    try{
        const BookList = await task.find(); //< Use of await
        res.render('task/list', {title: 'Task List', taskList: taskList
        });
    }catch(err){
        console.error(err);
        //Handle error
        res.render('task/list', {
            error: 'Error on server'
        });
    }
};

module.exports.AddTask = async (req,res,next)=>{
    try{
        res.render('task/add', {title:'Add Task'
            })
    }
    catch(err)
    {
        console.error(err);
        res.render('task/list',
            {
                error: 'Error on the server'
            });
    }
};

module.exports.ProcessTask = async (req,res,next)=>{
    try{
        let newtask = task({
            "tasks":req.body.tasks,
            "day":req.body.day,
            "time":req.body.time
        });
        task.create(newtask).then(() =>{
            res.redirect('/tasklist')
        })
    }
    catch(error){
        console.error(err);
        res.render('task/list',
            {
                error: 'Error on the server'
            });
    }
};

module.exports.EditTask = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const taskToEdit = await task.findById(id);
        res.render('task/edit', {title:'Edit Task', task:taskToEdit
            })
    }
    catch(error){
        console.error(err);
        res.render('task/list',
            {
                error: 'Error on the server'
            });
    }
}

module.exports.ProcessEditTask = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedtask = task({
            "tasks":req.body.tasks,
            "day":req.body.day,
            "time":req.body.time
        });
        Book.findByIdAndUpdate(id,updatedtask).then(()=>{
            res.redirect('/tasklist')
        });
    }
    catch(error){
        console.error(err);
        res.render('task/list',
            {
                error: 'Error on the server'
            });
    }
}

module.exports.DeleteTask = (req,res,next)=>{
    try{
        let id = req.params.id;
        task.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/tasklist')
        })
    }
    catch(error){
        console.error(err);
        res.render('task/list',
            {
                error: 'Error on the server'
            });
    }
}