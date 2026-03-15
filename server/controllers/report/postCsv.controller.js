import {parse} from 'csv-parse/sync'

async function postCsvReport(req, res){
    const { csvText } = req.body.csv;
    
    if (!csvText || typeof csvText !== "string") {
        res.status(400).json({ error: "CSV data is required in the request body" });
        return;
    }
    
    let records;
    try {
        const rows = await csv.parse(csvText, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
        });
        records = rows;
    } catch {
        res.status(400).json({ error: "Invalid CSV format" });
        return;
    }
    
    if (records.length === 0) {
        res.status(400).json({ error: "CSV file contains no data rows" });
        return;
    }
    
    const result = await reportService.createReportsFromCsv(
        req.user.userId,
        records
    );
    
    if ("error" in result) {
        res.status(result.status).json({ error: result.error });
        return;
    }
    
    res.status(201).json(result);
}

export default postCsvReport;