import React from 'react'
import { Props } from '../utils/defenitions'
import ReportsData from './ReportsData'

function AdminReports({title}: Props) {
  return (
    <ReportsData title={title}/>
  )
}

export default AdminReports