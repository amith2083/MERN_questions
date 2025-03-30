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

// 🛑 Middleware to block requests containing specific headers
const blockHeadersMiddleware = (req, res, next) => {
    const blockedHeaders = ["x-blocked-header", "x-secret-key"]; // Define restricted headers

    for (const header of blockedHeaders) {
        if (req.headers[header.toLowerCase()]) { // Convert to lowercase for case-insensitivity
            return res.status(403).send(`Request blocked due to restricted header: ${header}`);
        }
    }
    
    next(); // Allow request if no blocked headers are found
};

// 🌐 Use the middleware
app.use(blockHeadersMiddleware);

//add 2 numbers using req.query---------------------------------------------
app.get('/',(req,res)=>{
    const{num1,num2}= req.query;
    res.send(`${Number(num1) + Number(num2)}`)
})


app.listen(port,()=>{
    console.log('server running')
})