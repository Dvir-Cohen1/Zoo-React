
import Layout from '../layout/Layout'
import Table from '../components/Table/Table'
import ZooContextProvider from "../context/zooContext";

import useFormContext from '../context/zooContext'

function App() {
  // const test = useFormContext()
  // console.log(test)
  return (
    <ZooContextProvider>
      <Layout >
        <div className='App mt-5'>
          <Table />
        </div>
      </Layout>
    </ZooContextProvider>
  );
}





export default App;
