const fs = require('fs');

// Step 1: Create a writable stream and write data to a file
const writeStream = fs.createWriteStream('example2.txt');

writeStream.write('Hello, this is a test file!\n');
writeStream.write('Streaming makes Node.js efficient.\n');
writeStream.end(() => {
    console.log('✅ File created and written successfully.');

    // Step 2: Create a readable stream
    const readStream = fs.createReadStream('example.txt', { encoding: 'utf-8' });

    // Step 3: Pipe the readable stream to process.stdout (console)
    console.log('📖 Reading file content:');
    readStream.pipe(process.stdout);

    readStream.on('end', () => {
        console.log('\n✅ Finished reading file using pipe.');
    });

    readStream.on('error', (err) => {
        console.error(' Error reading file:', err);
    });
});
