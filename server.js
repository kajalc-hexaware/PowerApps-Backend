const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const goalRouter=require('./routes/goals')
const exampleRouter=require('./routes/example')
require('./db/mongoose')

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(goalRouter)
//app.use(exampleRouter)



const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server is on port ${port}`)
})