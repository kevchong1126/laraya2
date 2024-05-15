import React, { useState } from 'react'
import styles from './SearchContainer.module.scss'

import AdvancedSearch from './AdvancedSearch';
import Search from './Search';

import { useDispatch } from 'react-redux';
import { RESET_SELECT } from '../../store/actionCreators/filterSelectCreator';

const SearchContainer = () => {
    const dispatch = useDispatch();
    const [ selected, setSelected ] = useState('avanzado');

  return (
    <div className={styles.container}>
        <div className={styles.options}>
            <span className={selected == 'avanzado' ? styles.selected : ''} onClick={() => setSelected('avanzado')}>Busqueda Avanzada</span>
            |
            <span className={selected == 'simple' ? styles.selected : ''} onClick={() =>{
                setSelected('simple');
                dispatch(RESET_SELECT())
            }}>Busqueda Simple</span>
        </div>
        <div className={styles.searchOptions}>
            {
                selected === 'avanzado' && <AdvancedSearch />
            }
            {
                selected === 'simple' && <Search active={true}/>
            }
        </div>
    </div>
  )
}

export default SearchContainer