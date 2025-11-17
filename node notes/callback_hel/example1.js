const fs = require('fs').promises;

async function processFiles() {
    try {
        const data = await fs.readFile('test.txt', 'utf8');
        if (!data) {
            console.warn('test.txt is empty. Nothing to write to output.txt');
            return;
        }
        console.log('File content:', data);
        await fs.writeFile('output.txt', data);
        console.log('Content written to output.txt');
    } catch (err) {
        console.error('Error:', err);
    }
}

processFiles();