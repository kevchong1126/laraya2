import React, { useState } from 'react'
import styles from './AdvancedSearch.module.scss'
import Search from './Search';

import { useSelector } from 'react-redux';

import CustomSelect from './CustomSelect'
import { CAR_SELECT, MODE_SELECT, CATEGORY_SELECT } from '../../store/actionCreators/filterSelectCreator';
import { cars, modes, categories } from '../../data/filterOptions';

const AdvancedSearch = () => {
    const { car, mode, category } = useSelector(state => state.filterSelect);
    const [ active, setActive ] = useState(0);

  return (
    <div className={styles.container}>
        <CustomSelect options={cars} option={car} setOption={CAR_SELECT} idx={1} active={active} setActive={setActive}/>
        <CustomSelect options={categories} option={category} setOption={CATEGORY_SELECT} idx={2} active={active} setActive={setActive}/>
        <CustomSelect options={modes} option={mode} setOption={MODE_SELECT} idx={3} active={active} setActive={setActive}/>
        <Search active={active === 3}/>
    </div>
  )
}

export default AdvancedSearch