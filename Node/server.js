import express from 'express';
const app = express()

const port =7002

// const logger = (req,res,next)=>{
//     console.log(` ${req.url} is ${req.method}`)
//     next()
// }
// app.use(logger)

//middleware to block get request
const block = (req,res,next)=>{
    if(req.method==='GET'){
        return res.send('get request was blocked')
    }else{
        next();
    }
}
app.use(block)

//add 2 numbers using req.query---------------------------------------------
app.get('/',(req,res)=>{
    const{num1,num2}= req.query;
    res.send(`${Number(num1) + Number(num2)}`)
})


app.listen(port,()=>{
    console.log('server running')
})