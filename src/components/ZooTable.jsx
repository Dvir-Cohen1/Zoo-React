import React from 'react'
import DataGridTable from './DataGrid'

function ZooTable({mockData}) {
     return (
          <div className='zoo-table-container'>
               <DataGridTable mockData={mockData} />
          </div>
     )
}

export default ZooTable