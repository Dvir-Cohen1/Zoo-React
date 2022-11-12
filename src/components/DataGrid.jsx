import React from 'react'
import { MockColumns } from '../MockData';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function DataGridTable({ mockData }) {
     return (
          <Box sx={{ height: 600, width: '100%' }}>
               <DataGrid
                    rows={mockData}
                    columns={MockColumns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
               />
          </Box>
     )
}

export default DataGridTable