async function getReports(req, res){
    try {
        
    } catch (error) {
        console.log('Error in get reports controller', error.message);
        res.status(500).json({message: 'Internal server error '});
    }
}
export default getReports;