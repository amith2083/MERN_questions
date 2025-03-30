import fs from 'fs/promises';

async function loadFile(filePath) { // Renamed from readFileAsync
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log("File Content:", data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

async function saveFile(filePath, content) { // Renamed from writeFileAsync
    try {
        await fs.writeFile(filePath, content);
        console.log("File written successfully!");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

// ✅ Usage
await saveFile("example.txt", "Hello, world!");
await loadFile("example.txt");
