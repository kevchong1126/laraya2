import React from 'react'
import styles from './ResultFilters.module.scss'

import CustomSelect from './CustomSelect';

//Redux
import { useSelector } from 'react-redux';
import { CAR_SELECT, MODE_SELECT, CATEGORY_SELECT, SORT } from '../../store/actionCreators/filterSelectCreator';
import { cars, modes, categories, sorts } from '../../data/filterOptions';

const ResultFilters = () => {
  const { car, mode, category, sort} = useSelector( state => state.filterSelect);
  
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.filter}>
                <p className={styles.label}>Ordernar:</p>
                <CustomSelect options={sorts} option={sort} setOption={SORT}/>
            </div>
        </div>
    </div>
  )
}

export default ResultFilters