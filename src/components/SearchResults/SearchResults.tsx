import React from 'react';
import styles from './SearchResults.module.css';

import SearchResult from '../SearchResult/SearchResult';

// interface SearchResultsProps {
    
// }

// { }: SearchResultsProps
const SearchResults = () => {

  const data = [
    {
      id: 0,
      placeType: 'A',
      name: 'Manchester Air',
    },
    {
      id: 1,
      placeType: 'A',
      name: 'Manchester Picc',
    },
    {
      id: 2,
      placeType: 'B',
      name: 'Manchester Vic',
    }
  ]
    return (
      <div className={styles['search-results']}>
        {data.map(result => (<SearchResult key={`result-${result.id}`} result={result} />))}
      </div>
    )
};

export default SearchResults;
