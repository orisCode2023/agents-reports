import React from 'react'
import { Link } from 'react-router'

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to={'/AdminReports'}>All Reports</Link>
      <Link to={'/AdminUsers'}>All Users</Link>
      <Link to={'/CreateUser'}>Create User</Link>
    </div>
  )
}

export default AdminDashboard