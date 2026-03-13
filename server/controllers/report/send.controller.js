import Report from "../../models/reports.model.js";
import upload from "../../services/uplaodFile.service.js";

async function sendReport(req, res){
    try {
        const { catagory, urgancy, message } = req.body;
        const imagePath = req.file ? req.file.path : null;
        const userId = req.user.id;

        if (!catagory || !urgancy || !message){
            return res.status(400).json({message: 'one of the report details is missing'})
        }

        if (req.file && req.file.size > upload.limits.fileSize){
            return res.status(413).json({message: "file size to big max size is 5MB"});  
        }
        const newReport = await Report.create({
            userId,
            catagory,
            urgancy,
            message,
            imagePath,
            sourceType: 'manual'
        })
        return res.status(201).json({message: 'report successfully', report: newReport})
    } catch (error) {
        console.log('Error in send report controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default sendReport;