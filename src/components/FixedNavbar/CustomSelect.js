import React, { useState } from 'react'
import styles from './CustomSelect.module.scss'

import { FaAngleDown } from "react-icons/fa6";

import useOutsideClick from '../../hooks/useOutsideClick'

//Redux
import { useDispatch } from 'react-redux';

const CustomSelect = ({ options, option, setOption, idx, active, setActive }) => {
    const dispatch = useDispatch();
    const [ show, setShow ] = useState(false);

    const ref = useOutsideClick(() => {
        setShow(false)
    });
    
  return (
    <div ref={ref} className={`${styles.container} ${active > idx-2 ? styles.active : ''}`} onClick={() => setShow(prev => !prev)}>
        <div className={styles.labelContainer}>
            <p className={styles.label}>{idx} | {option}</p>
            <FaAngleDown  className={styles.icon} />
        </div>
        <ul className={`${styles.optionsContainer} ${show ? styles.show: ''}`} >
            {
                options.map( (el, index) => <li key={index} className={styles.option}
                onClick={() => {
                    dispatch(setOption(el));
                    setActive(idx)
                } }>{el}</li>)
            }
        </ul>
    </div>
  )
}


export default CustomSelect