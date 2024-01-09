import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Content from './components/Content';

const BASE_URL = 'https://swapi.dev/api/people';



function App() {

  const [data, setData] = useState([]);
  const [renderedData, setRenderedData] = useState([]);

  let pages = '';
  const getPersons = axios.get(BASE_URL, {
    params: { pages }
  });

  useEffect(()=>{
   getPersons.then((res)=> {
    console.log(res.data.results);
    setData(res.data.results);
   })

  },[]);

  useEffect(()=>{
    setRenderedData(data)
 
   },[data]);

  return (
    <div className="App">
      <Container fluid='md'>
        <Content renderedData={renderedData}/>
      </Container>
    </div>
  );
}

export default App;
