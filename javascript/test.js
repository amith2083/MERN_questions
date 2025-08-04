


const writeStream = fs.writeCreateStream('test1.txt');

writeStream('hello')

const readStream = fs.readStream('test1.txt',{encoding:'utf-8'})


readStream.on('data',(chunk)=>{
    console.log(chunk)
})