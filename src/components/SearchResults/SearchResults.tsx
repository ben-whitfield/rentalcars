import React from 'react';
import styles from './SearchResults.module.css';

import SearchResult from '../SearchResult/SearchResult';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

interface resultsProp {
  loading: boolean
  error: any
}

interface results extends resultsProp {
    results? :{
      docs: {
        bookingId: number
        placeType: string
        name: string
      }[]
      isGooglePowered: boolean
      numFound: number
    }
    length?: number

}

const SearchResults = ({results, loading, error}:results) => {
  
  const data = results?.docs || []
  
  return (
    <div className={`${styles['search-results']}, ${loading? 'loading' : ''}`}>
      {error ? <ErrorMessage message={error} /> : data.map(item => (<SearchResult key={item.bookingId ?? 'noneFound'} result={item} />))}
    </div>
  )
};

export default SearchResults;
