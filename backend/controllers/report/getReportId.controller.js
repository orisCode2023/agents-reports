async function getReportId(req, res){
    try {
        
    } catch (error) {
        console.log('Error in get report by id controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default getReportId;