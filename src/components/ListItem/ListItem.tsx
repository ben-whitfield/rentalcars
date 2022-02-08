import React from 'react';
import styles from './ListItem.module.css';

interface ListItemProps {
  icon: string
  text: string
}


const ListItem = ({icon, text}: ListItemProps) => {
    return (
      <div className={styles['list-container']}>
        <div className={styles['list-item']}>
          <div className={styles[`list-icon-${icon}`]}></div>
          <div className={styles['list-text']}>{text}</div>
        </div>
      </div>
    )
} ;

export default ListItem;
