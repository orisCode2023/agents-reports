import multer from 'multer';

const upload = multer({
    dest: '../data/img',
    limits: {fileSize : 5 * 1024 * 1024}
});

export default upload
