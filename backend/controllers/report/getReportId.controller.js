async function getReportId(req, res){
    try {
        
    } catch (error) {
        console.log('Error in get report by id controller', error.message);
        res.status(500).json({message: 'Internal server error '});
    }
}
export default getReportId;