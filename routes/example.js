const express=require('express')
const router=express.Router()
const Goals=require('../models/example')

//get api call

router.get('/goals',async(req,res)=>{
    try{
        const goals=await Goals.find({})
        res.status(200).send(goals)
    }
    catch{
        res.status(500).send('Server not responding')
        
    }

})

//post api call

router.post('/goal',async(req,res)=>{
    const goal=new Goals(req.body)
    try{
        await goal.save()
        res.status(201).send(goal)
    }
    catch(e){
        res.status(400).send()
    }
})

module.exports=router