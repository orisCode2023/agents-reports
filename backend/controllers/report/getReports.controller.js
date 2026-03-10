import Report from "../../models/reports.model.js";

async function getReports(req, res){
    try {
        const user = req.user;
        const {query} = req.query;
        const query1 = req.query;
        console.log(user)
        console.log(query)
        console.log(query1)
        let reports;

        if(user.role === 'admin'){
            reports = await Report.find(query1);

        } 
        if (user.role === 'agent') {
            reports = await Report.find({
                query1
                // userId: user._id
            })
        }
        if(!reports) {
            res.status(400).json({message: 'report/s not found'})
        }
        res.status(200).json({message: 'report/s was found', Report: reports})
        
    } catch (error) {
        console.log('Error in get reports controller', error.message);
        res.status(500).json({message: 'Internal server error '});
    }
}
export default getReports;