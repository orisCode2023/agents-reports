import express from 'express';
import getReportId from '../controllers/report/getReportId.controller.js';
import getReports from '../controllers/report/getReports.controller.js';
import postCsvReport from '../controllers/report/postCsv.controller.js';
import sendReport from '../controllers/report/send.controller.js';
import upload from '../services/uplaodFile.service.js';


const reportRouter = express.Router();

reportRouter.post('/', upload.single("image"), sendReport);
reportRouter.post('/csv', postCsvReport);
reportRouter.get('/', getReports);
reportRouter.get('/:id', getReportId);

export default reportRouter 