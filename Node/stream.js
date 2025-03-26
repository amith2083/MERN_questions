const fs = require('fs');
 const writeStream = fs.createWriteStream('example.txt')

 writeStream.write('hello, this is amith')

 writeStream.end(()=>{                     //b/c writeStream.end() is asynchronous, the readStream might start before the file is fully written.
    console.log('file created ');

    const appendStream = fs.createWriteStream('example.txt', { flags: 'a' }); // 'a' for append mode

    appendStream.write('\nThis is newly appended text.');
    appendStream.end(() => {
        console.log('✅ Data appended successfully.');
        const readStream = fs.createReadStream('example.txt',{encoding:'utf-8'})

        readStream.on('data',(chunk)=>{
           console.log('data is', chunk)
        })
       
        readStream.on('end', () => {
           console.log('✅ Finished reading file.');
       });
        
        readStream.on('error',(err)=>{
           console.log('error is', err)
        })
    });

  
 });



 