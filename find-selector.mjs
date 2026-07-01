import fs from 'fs';

const lines = fs.readFileSync('src/App.tsx', 'utf-8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<button') || lines[i].includes('</button>')) {
    // console.log(`Line ${i + 1}: ${lines[i].trim()}`);
  }
}
