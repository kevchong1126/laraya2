import React, { useState } from 'react'
import style from './Modal.module.scss'
import { createPortal } from 'react-dom'

import {dummy} from '../../data/selectCar'
import CustomSelect from './CustomSelect'

import { useDispatch } from 'react-redux'
import { setCar, deleteCar } from '../../store/actionCreators/selectedCarCreator'

const Modal = ({ clickHandler }) => {
    const dispatch = useDispatch();
    const car = JSON.parse(localStorage.getItem('selectedCar'))
    const [selectedMake, setSelectedMake] = useState('Make');
      
    const addHandler = () => {
        dispatch(setCar(selectedMake))

        clickHandler(false);
    }

    const deleteJSONHandler = () => {
        dispatch(deleteCar())

        clickHandler(false);
    }

  return createPortal(
    <>
        <div className={style.modalOverlay} onClick={ () => clickHandler(false)}></div>
        <div className={style.card}>
            <div className={style.header}>
                <p className={style.text}>
                    SELECT A CAR
                </p>
                <p className={style.close} onClick={ () => clickHandler(false)}>X</p>
            </div>

            <div className={style.body}>
                <CustomSelect value={selectedMake} onSelectMake={setSelectedMake} makes={dummy} />
            </div>

            <div className={style.save}>
                <button className={` ${selectedMake !== 'Marca' ? style.saveBtn : style.disabledBtn}`} onClick={addHandler}>
                    ADD CAR
                </button>
            </div>

            {
                car && 
                <div className={style.deleteCar}>
                    <p className={style.or}> OR </p>
                    <button className={style.delete} onClick={deleteJSONHandler}> DELETE {car} </button>
                </div>
            }
        </div>
    </>,
    document.getElementById('carModal')
  )
}

export default Modal