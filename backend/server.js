import express from 'express'
import {connectDB} from './Config/db.js'
import mongoose from 'mongoose'
import User from './Model/User.js'
const app=express()

connectDB()
app.use(express.urlencoded())
app.get('/get',async(req,res)=>{
    const user= await User.find()
    res.json(user)
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})


app.post('/post',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    }catch(error){
        res.status(401).json(error)
    }
})

app.put('/put/:id',async(req,res)=>{
    try{
        const update=await User.findByIdAndUpdate(req.params.id,req.body)
        res.json(update)
    }
    catch(error){
        res.json(error)
    }
})

app.patch('/patch',(req,res)=>{
    res.send('from patch')
})

app.delete('/delete/:id',async(req,res)=>{
     try{
        const del=await User.findByIdAndDelete(req.params.id,req.body)
        res.json(del)
    }
    catch(error){
        res.json(error)
    }
})