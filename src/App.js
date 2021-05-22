// 10:26 is basically where we left off. 

import React, { useEffect } from 'react'; // fetches API data everytime app loads. 
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=327e5fcdbbcdb402ff611d8debb36868&format=1';

function App() {


  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data.rates))
  }, []);

  return (
    <>
     <h1>Money Enjoyer</h1>
     <CurrencyRow />
     <div className="equals"> = </div>
     <CurrencyRow />
    </>
  );
}

export default App;
