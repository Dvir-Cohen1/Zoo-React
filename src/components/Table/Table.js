
import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from "@mui/material/Avatar";

// Data
import { MockDataRow } from '../../data/MockData'
import TableForm from './TableForm'
import TableDataGrid from './TableDataGrid'

function Table() {
     const [mockData, setMockData] = useState(MockDataRow)

     const addItemToMockData = (data) => {
          const newItem = { id: uuid(), ...data }
          setMockData((pre) => [...pre, newItem])
     }

     const deleteItemFromMockData = (id) => {
          setMockData((prev) => prev.filter((item) => item.id !== id))
     }

     const duplicateMockItem = (id) => {
          const item = mockData.find(item => item.id === id);
          const duplicatedItem = { ...item, id: uuid() }
          setMockData((pre) => [...pre, duplicatedItem])
     }

     const editMockDataItem = () => {
          console.log("from edit mock data item")
     }

     const MockColumns = [
          { field: 'id', headerName: 'id', width: 120 },
          {
               field: 'name',
               headerName: 'Name',
               width: 150,
               editable: true,
          },
          {
               field: 'age',
               headerName: 'Age',
               type: 'number',
               width: 150,
               editable: true,
          },
          {
               field: 'type',
               headerName: 'Type',
               width: 250,
               editable: true,
          },
          {
               field: 'photo',
               headerName: 'Photo',
               align: 'center',
               description: 'This column has a value getter and is not sortable.',
               sortable: false,
               width: 160,
               renderCell: (params) => {
                    return (
                         <>
                              <Avatar src={params.row.photoUrl} />
                         </>
                    );
               }
          },
          {
               field: 'actions',
               type: 'actions',
               getActions: (params) => [
                    <GridActionsCellItem
                         icon={<EditIcon />}
                         label="Edit"
                         onClick={''}
                    // showInMenu
                    />,
                    <GridActionsCellItem
                         icon={<FileCopyIcon />}
                         label="Duplicate"
                         onClick={() => duplicateMockItem(params.row.id)}
                    // showInMenu
                    />,
                    <GridActionsCellItem
                         icon={<DeleteIcon />}
                         label="Delete"
                         onClick={() => deleteItemFromMockData(params.row.id)}
                    />,
               ],
               headerName: 'Actions',
               description: 'Actions',
               sortable: false,
               width: 200,
          },
     ];


     return (
          <div className=''>
               <div className='text-left ml-5 mb-5 text-2xl container'>My Zoo</div>
               <div className="container bg-white bor--der-2 border-grey-500 rounded-md">
                    <TableForm addItemToMockData={addItemToMockData} />
                    <TableDataGrid MockColumns={MockColumns} mockData={mockData} editMockDataItem={editMockDataItem} />
               </div>
          </div>
     )
}

export default Table