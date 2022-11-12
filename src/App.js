
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

// Componenets
import Zooform from './components/ZooForm'
import ZooTable from './components/ZooTable'
import Header from './components/Header'

function App() {

  const [mockData, setMockData] = useState([
    {
      "id": uuid(),
      "name": "Balduin",
      "age": "59-899-8637",
      "type": "Crow, pied",
      "photo_url": "http://dummyimage.com/133x100.png/5fa2dd/ffffff"
    }, {
      "id": uuid(),
      "name": "Steffie",
      "age": "57-041-8819",
      "type": "White-tailed deer",
      "photo_url": "http://dummyimage.com/169x100.png/5fa2dd/ffffff"
    }, {
      "id": uuid(),
      "name": "Byran",
      "age": "67-502-6271",
      "type": "North American red fox",
      "photo_url": "http://dummyimage.com/186x100.png/ff4444/ffffff"
    }, {
      "id": uuid(),
      "name": "Lina",
      "age": "29-630-8857",
      "type": "Southern white-crowned shrike",
      "photo_url": "http://dummyimage.com/105x100.png/ff4444/ffffff"
    }, {
      "id": uuid(),
      "name": "Vivienne",
      "age": "18-639-6351",
      "type": "Four-spotted skimmer",
      "photo_url": "http://dummyimage.com/246x100.png/dddddd/000000"
    }
  ])

  const addItemToMockData = (data) => {
    const newItem = { id: uuid(), ...data }
    setMockData((pre) => [...pre, newItem])
    console.log('from app')
  }

  return (
    <div className='App'>
      <Header/>
      <div className="container bg-white border-2 border-grey-500 rounded-md">
        <Zooform mockData={mockData} addItemToMockData={addItemToMockData} />
        <div className='text-left ml-5 mb-5 text-2xl'>My Zoo</div>
        <ZooTable mockData={mockData} />
      </div>
    </div>
  );
}

export default App;
