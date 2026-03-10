import Report from "../../models/reports.model.js";

async function getReports(req, res){
    try {
        const user = req.user;
        const param = req.param;
        let reports;

        if(user.role === 'admin'){
            reports = await Report.find(param);

        } else if (user.role === 'agent') {
            reports = await Report.find({
                param,
                userId: user.id
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