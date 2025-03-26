import express from 'express';
const app = express()

const port =7002

const logger = (req,res,next)=>{
    console.log(` ${req.url} is ${req.method}`)
    next()
}
app.use(logger)

//add 2 numbers using req.query---------------------------------------------
app.get('/',(req,res)=>{
    const{num1,num2}= req.query;
    res.send(`${Number(num1) + Number(num2)}`)
})


app.listen(port,()=>{
    console.log('server running')
})