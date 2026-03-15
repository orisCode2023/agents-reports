import Report from '../../models/reports.model.js'
async function getReportId(req, res){
    try {
            const { id } = req.params;

            const report = await Report.findById(id);

            if (!report) {
              return res.status(404).json({ message: "Report not found" });
            }
          
            if (req.user.role === "agent" && report.userId !== req.user.id) {
              return res.status(403).json({ message: "not authorized" });
            }
          
            return res.status(200).json({message: "fonud successfully", data: report })
    } catch (error) {
        console.log('Error in get report by id controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default getReportId;