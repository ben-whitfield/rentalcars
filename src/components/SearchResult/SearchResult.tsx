import React from 'react';
import styles from './SearchResult.module.css';

interface SearchResultsProps {
  result: {
    bookingId: number
    placeType: string
    name: string

  }   
}

const SearchResult = ({ result }: SearchResultsProps) => {
  return (
    <div className={styles['search-result']}>
      {result.bookingId}
      {result.placeType ?? ''} 
      {result.name}
    </div>
  )
};

export default SearchResult;
