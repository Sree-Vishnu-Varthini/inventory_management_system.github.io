const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express()

const FoodModel = require('./models/Food')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://root:root@cluster0.wznxrhd.mongodb.net/')

app.post('/insert', async(req,res)=>{
    const foodName = req.body.foodName
    const days = req.body.days
    const food = new FoodModel({foodName:foodName, daysSinceIAte:days})

    try{
        await food.save()
        res.send("Inserted Data")
    }catch(err){
        console.log(err)
    }
})

app.get('/read',async(req,res)=>{
    try{
        const result = await FoodModel.find({})
        res.send(result)
    }catch(err){
        res.status(500).send(err)
    }
})



app.put('/update',async(req,res)=>{
    const newFood = req.body.newFoodName; // Use newFood instead of newFoodName
    const id = req.body.id;
    try{
        const updateFood = await FoodModel.findByIdAndUpdate(id, { foodName: newFood });
        res.send(updateFood);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
});

app.put('/quant',async(req,res)=>{
    const newQuantity = req.body.newQuantity;
    const id = req.body.id;
    try{
        const updateQuantity = await FoodModel.findByIdAndUpdate(id, { daysSinceIAte: newQuantity });
        res.send(updateQuantity);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
});


app.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id
    try{
        await FoodModel.findByIdAndDelete(id).exec()
        res.send("Deleted")

    }catch(err){
        console.error(err)
        res.status(500).send(err)
    }
})

app.listen(3001, ()=> {
    console.log("Server is Running")
})