export const MockDataRow =
  [
    {
      "id": 1,
      "name": "Balduin",
      "age": "59-899-8637",
      "type": "Crow, pied",
      "photo_url": "http://dummyimage.com/133x100.png/5fa2dd/ffffff"
    }, {
      "id": 2,
      "name": "Steffie",
      "age": "57-041-8819",
      "type": "White-tailed deer",
      "photo_url": "http://dummyimage.com/169x100.png/5fa2dd/ffffff"
    }, {
      "id": 3,
      "name": "Byran",
      "age": "67-502-6271",
      "type": "North American red fox",
      "photo_url": "http://dummyimage.com/186x100.png/ff4444/ffffff"
    }, {
      "id": 4,
      "name": "Lina",
      "age": "29-630-8857",
      "type": "Southern white-crowned shrike",
      "photo_url": "http://dummyimage.com/105x100.png/ff4444/ffffff"
    }, {
      "id": 5,
      "name": "Vivienne",
      "age": "18-639-6351",
      "type": "Four-spotted skimmer",
      "photo_url": "http://dummyimage.com/246x100.png/dddddd/000000"
    }
  ]



export const MockColumns = [
  { field: 'id', headerName: 'ID', width: 250 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'number',
    width: 250,
    editable: true,
  },
  {
    field: 'photo',
    headerName: 'Photo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
