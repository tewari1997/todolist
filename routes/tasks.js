const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let ObjectId = mongoose.Types.ObjectId;

var Tasks = require("../models/Tasks");

router.post("/",async (req,res ,next)=>{
    try{
        let task = await Tasks.create({
            title: req.body.title,
            description: req.body.description
        });
        res.json(task);
    }
    catch(e){
        console.log("Error in post of task", e.message , e.toString());
        req.json({message: error, error: e.message});
    }
})

router.put("/:id",async (req,res ,next)=>{
    try{
        let task = await Tasks.findOneAndUpdate({_id:ObjectId(req.params.id)},{
            title: req.body.title,
            description: req.body.description
        },{upsert: false , new: true});
        res.json(task);
    }
    catch(e){
        console.log("Error in post of task", e.message , e.toString());
        req.json({message: error, error: e.message});
    }
})

router.get("/", async (req, res, next) => {
    try{
    let task = await Tasks.find();
    res.json(task);
    }
    catch(e){
        console.log("Error in post of task", e.message , e.toString());
        req.json({message: error, error: e.message});
    }
})

router.delete("/:id",async (req,res,next)=>{
    try{
    let task = await Tasks.deleteOne({_id:ObjectId(req.params.id)});
    res.json(task);
    }
    catch(e){
        console.log("Error in post of task", e.message , e.toString());
        req.json({message: error, error: e.message});
    }
})

module.exports = router