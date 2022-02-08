import React, { ChangeEventHandler } from 'react';
import styles from './SearchForm.module.css';

import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button';

interface SearchFormProps {
    /** Id of the input */
    params: {
        searchTerm: string
    }
    /** Which type of button */
    onParamChange: ChangeEventHandler
}

const SearchForm = ({ params, onParamChange }: SearchFormProps) => {
  return ( 
    <div className={styles['search-wrapper']}>
      <form className={styles.form} >
        <FormInput id='searchform' type='text' text='Search: ' inputChange={onParamChange} value={params.searchTerm} />
        <Button type="submit" text="Search" />
      </form>
    </div>
  )
};

export default SearchForm;