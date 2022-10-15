import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './List'; 

function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
    <h1>{people.length} birthdays, Me and the "bois"</h1>
      <div className='container'>
        <List people={people}/>
      </div>
        <button onClick={()=> setPeople([])}>Clear All</button>
    </>
  );
}

export default App;
