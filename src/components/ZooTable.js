import React from 'react'
import DataGridTable from './DataGrid'

function ZooTable({ deleteItemFromMockData, MockColumns, mockData,editMockDataItem }) {
     return (
          <div className='zoo-table-container'>
               <DataGridTable deleteItemFromMockData={deleteItemFromMockData} MockColumns={MockColumns} mockData={mockData} />
          </div>
     )
}

export default ZooTable