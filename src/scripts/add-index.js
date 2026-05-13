// scripts/add-indexes.js
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tìm tất cả file .md trong thư mục products
const files = await glob('src/articles/products/*.md', {
    cwd: join(__dirname, '..')
});

console.log(`📁 Tìm thấy ${files.length} files`);

let currentIndex = 1;
const updatedFiles = [];

files.forEach(file => {
    const fullPath = join(__dirname, '..', file);
    const content = readFileSync(fullPath, 'utf-8');
    
    // Kiểm tra đã có index chưa
    if (!content.includes('index:')) {
        // Thêm index vào frontmatter
        const newContent = content.replace(
            /^(---\n)([\s\S]*?)(\n---)/,
            `$1$2\nindex: ${currentIndex}\n$3`
        );
        writeFileSync(fullPath, newContent);
        updatedFiles.push(file);
        console.log(`✅ Thêm index ${currentIndex} vào: ${file}`);
        currentIndex++;
    } else {
        console.log(`⏭️ Đã có index, bỏ qua: ${file}`);
    }
});

console.log(`\n📊 Hoàn thành! Đã cập nhật ${updatedFiles.length} files`);