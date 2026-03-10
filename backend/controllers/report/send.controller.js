async function sendReport(req, res){
    try {
        
    } catch (error) {
        console.log('Error in send report controller', error.message);
        res.status(500).json({message: 'Internal server error '});
    }
}
export default sendReport;