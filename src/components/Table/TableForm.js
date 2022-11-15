import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const TableForm = ({ addItemToMockData }) => {
     const [name, setName] = React.useState('');
     const [age, setAge] = React.useState('');
     const [type, setType] = React.useState('');
     const [photoUrl, setPhoto] = React.useState('');

     const handleSubmit = (event) => {
          event.preventDefault()
          if (!name || !age || !type || !photoUrl) return

          const data = {
               name,
               age,
               type,
               photoUrl
          }
          addItemToMockData(data);
     }
     
  return (
     <div className='zoo-form-container'>
     <Box
     className='flex'
          component="form"
          sx={{
               '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off">
          <TextField onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField onChange={(event) => setAge(event.target.value)} id="outlined-basic" label="Age" variant="outlined" />
          <TextField onChange={(event) => setPhoto(event.target.value)} id="outlined-basic" label="Photo URL" variant="outlined" />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
               <InputLabel id="demo-select-small">Type</InputLabel>
               <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={type}
                    label="Type"
                    onChange={(event) => setType(event.target.value)}
               >
                    <MenuItem value="">
                         <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Dog'}>Dog</MenuItem>
                    <MenuItem value={'Cat'}>Cat</MenuItem>
                    <MenuItem value={'Lion'}>Lion</MenuItem>
                    <MenuItem value={'Lioness'}>Lioness</MenuItem>
                    <MenuItem value={'Parrot'}>Parrot</MenuItem>
                    <MenuItem value={'Rabbit'}>Rabbit</MenuItem>
                    <MenuItem value={'Snake'}>Snake</MenuItem>
                    <MenuItem value={'Fish'}>Fish</MenuItem>
                    <MenuItem value={'Fox'}>Fox</MenuItem>
                    <MenuItem value={'Bear'}>Bear</MenuItem>
                    <MenuItem value={'Tiger'}>Tiger</MenuItem>
                    <MenuItem value={'Elephant'}>Elephant</MenuItem>
                    <MenuItem value={'Cow'}>Cow</MenuItem>
               </Select>
          </FormControl>
          <Button type='submit' onClick={handleSubmit} className='float-left m-3' variant="contained">Create</Button>
     </Box>
</div>
  )
}

export default TableForm