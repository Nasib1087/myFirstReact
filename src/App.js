import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Components from './Components/Components';

function App() {

  const [country, setCountry] = useState([])
  console.log(country)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
    .then(data=>setCountry(data))


},[])

  return (
    <div className="App">
     
      {country.map(count=><Components name={count.name} cap={count.capital}></Components>)}
      
    </div>
  );
}

export default App;
