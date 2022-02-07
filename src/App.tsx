import React, {useState, ChangeEvent} from 'react';
import './App.css';

import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import useFetchResults from './getResults';

function App() {
  const [ params, setParams ] = useState({searchTerm: ''})

  function handleParamChange(e: ChangeEvent<HTMLInputElement>) {
    const param = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
        
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }
  
  const { results, loading, error } = useFetchResults(params.searchTerm)
  
  return (
      <div className="App">
          <SearchForm params={params} onParamChange={handleParamChange}/>
          {<SearchResults results={results.results} loading={loading} error={error}/>}
      </div>
  );
}

export default App;
