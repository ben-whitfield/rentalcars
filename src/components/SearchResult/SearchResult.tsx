import React from 'react';
import styles from './SearchResult.module.css';

interface SearchResultsProps {
  result: {
    id: number
    placeType: string
    name: string

  }   
}

const SearchResult = ({ result }: SearchResultsProps) => {
  return (
    <div className={styles['search-result']}>
      {result.id}
      {result.placeType} 
      {result.name}
    </div>
  )
};

export default SearchResult;
