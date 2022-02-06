import React, {useState, ChangeEvent} from 'react';
import './App.css';

import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const [ params, setParams ] = useState({searchTerm: ''})

  function handleParamChange(e: ChangeEvent<HTMLInputElement>) {
    const param = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
    console.log('handle change', param, value)
    
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }

    return (
        <div className="App">
            <SearchForm params={params} onParamChange={handleParamChange}/>
            <SearchResults />
        </div>
    );
}

export default App;
