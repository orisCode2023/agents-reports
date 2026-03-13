import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({
    dest: path.join(__dirname, '../data/img'),
    limits: { fileSize: 5 * 1024 * 1024 }
});

export default upload;