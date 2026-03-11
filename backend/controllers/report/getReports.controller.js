import Report from "../../models/reports.model.js";


function filterArray(reports, query){
    const keysQuery = Object.keys(query);
    const filterQuery = reports.filter((report) => {
        keysQuery.map(k => {
        report.k === query.k
        })
    });
    return filterQuery
}
async function getReports(req, res){
    try {
        const user = req.user;
        console.log(req.query)
        const {category, urgency} = req.query;
        console.log(urgency)
        console.log(category)
        const reports = await Report.find();

        if(!reports) {
            return res.status(400).json({message: 'reports not found'})
        }
        if(user.role === 'admin'){
            console.log('give the admin every thing he wants and filter by the query')
        } 
        if (user.role === 'agent') {
            const final = reports.filter(report => report.userId === user.id)
            console.log('filter by the user id and by the query')
            return res.status(200).json({message: 'report/s was found', Report: final})
        }
        return res.status(200).json({message: 'reports was found', Report: reports})
        
    } catch (error) {
        console.log('Error in get reports controller', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
export default getReports;