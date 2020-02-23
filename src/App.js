import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/SearhList/body';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="main">
      <Header query={query} setQuery={setQuery}></Header>
      <Body query={query}></Body>
    </div>
  );
}

export default App;
