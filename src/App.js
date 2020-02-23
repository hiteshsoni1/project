import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import SearchList from './Components/SearchList/SearchList';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="main">
      <Header query={query} setQuery={setQuery}></Header>
      <SearchList query={query}></SearchList>
    </div>
  );
}

export default App;
