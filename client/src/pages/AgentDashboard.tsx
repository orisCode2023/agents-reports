import React from "react"
import { Link } from "react-router"

function AgentDashboard() {
  return (
    <div>
      <h2>AgentDashboard</h2>
      <Link to={'/NewReport'}>Report Form</Link>
      <Link to={'/UploadCsv'}>Report Csv</Link>
      <Link to={'/ReportsData'}>Get Reports</Link>
      <Link to={'/GetUserInfo'}>Get User Information</Link>
    </div>
  )
}

export default AgentDashboard