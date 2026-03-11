import Report from "../../models/reports.model.js";


// function filterArray(reports, query){
//     const keysQuery = Object.keys(query);
//     const filterQuery = reports.filter((report) => {
//         keysQuery.map(k => {
//         report[k] === query[k]
//         })
//     });
//     return filterQuery
// }
async function getReports(req, res){
    try {
        const {role, id} = req.user;
        const {catagory, urgancy} = req.query;
        console.log(role)
        console.log(id)
        console.log(catagory)
        console.log(urgancy)

        const filterReports = {};

        if (catagory) {
            filterReports.catagory = catagory;
        }
        if (urgancy) {
            filterReports.urgancy = urgancy;
        }

        if (role === 'agent') {
            console.log('hi agent')
            filterReports.userId = id;
            console.log(filterReports)
        }
        const reports = await Report.find(filterReports);

        if(!reports || reports.length === 0) {
            return res.status(400).json({message: 'reports not found'})
        }

        return res.status(200).json({message: 'reports was found', Report: reports})
        
    } catch (error) {
        console.log('Error in get reports controller', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
export default getReports;