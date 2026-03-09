async function getReports(req, res){
    try {
        
    } catch (error) {
        console.log('Error in get reports controller', error.message);
        req.status(500).json({message: 'Internal server error '});
    }
}
export default getReports;