async function getReportId(req, res){
    try {
        const {id} = req.param;
        return res.status(200).json({message: 'report found', Report: report});
        
    } catch (error) {
        console.log('Error in get report by id controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default getReportId;