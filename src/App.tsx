import React, {useState, ChangeEvent} from 'react';
import style from './App.module.css';

import ListItem from './components/ListItem/ListItem';
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
      <div className={style['app']}>

        <section className={style['hero-container']}>
          <div className={style['hero-content']}>
            <h1 className={style['page-title']}>Car Hire – Search, Compare & Save</h1>
            <ListItem text={'Free cancellations on most bookings'} icon={'check'} />
            <ListItem text={'60,000+ locations'} icon={'check'} />
            <ListItem text={'Customer support in 40+ languages'} icon={'check'} />
            <SearchForm params={params} onParamChange={handleParamChange}/>
            {<SearchResults results={results.results} loading={loading} error={error}/>}
          </div>
        </section>

        <section className={style['links']}>
          <h3>Page links</h3>
        </section>
      </div>
  );
}

export default App;
