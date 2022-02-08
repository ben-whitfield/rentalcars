import React from 'react';
import styles from './SearchResult.module.css';

interface SearchResultsProps {
  result: {
    bookingId: number
    placeType: string
    name: string
    iata: string
    city: string
    region: string
    country: string
  }   
}

const placeType = (val: string) => {
  console.log(val)
  if(val === 'A') { return 'Airport' }
  else if (val === 'T') { return 'Station' }
  else return 'Station'
}

const SearchResult = ({ result }: SearchResultsProps) => {
  return ( 
    <div className={styles['search-result']}>
      <div className={`${styles['result-label']} ${result.placeType === 'a' ? 'a' : 'c'}`}>
        <span>{placeType(result.placeType)}</span>
      </div>
      <div className={styles['result-meta']}>
        <span className={styles['result-focus']}>{`${result.name}, (${result.iata})`}</span>
        <span className={styles['result-sub']}>{`${result.city}, ${result.region}, ${result.country}`}</span>
      </div>
    </div>
  )
};

export default SearchResult;
