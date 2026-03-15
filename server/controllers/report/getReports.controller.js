import Report from "../../models/reports.model.js";

async function getReports(req, res) {
  try {
    const { role, id } = req.user;
    const { catagory, urgancy } = req.query;

    const filterReports = {};

    if (catagory) {
      filterReports.catagory = catagory;
    }
    if (urgancy) {
      filterReports.urgancy = urgancy;
    }

    if (role === "agent") {
      filterReports.userId = id;
    }
    const reports = await Report.find(filterReports);

    if (!reports) {
      return res.status(400).json({ message: "reports not found" });
    }
    

    return res
      .status(200)
      .json({ message: "reports was found", data: reports });
  } catch (error) {
    console.log("Error in get reports controller", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}
export default getReports;
