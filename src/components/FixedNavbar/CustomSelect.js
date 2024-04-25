import React, { useState } from 'react'
import style from './CustomSelect.module.scss'
import useOutsideClick from '../../hooks/useOutsideClick'

import { GoTriangleDown } from "react-icons/go"

const CustomSelect = ({value, makes, onSelectMake}) => {
    const [isClicked, setIsClicked] = useState(false);
    const ref = useOutsideClick(() => setIsClicked(false));

    const makeHandler = make => {
        setIsClicked(false);
        onSelectMake(make);
    };

  return (
    <div className={style.selectContainer} ref={ref}>

        {
            makes && <>
                <input className={`${style.select}`} type='text' value={value} readOnly onClick={() => setIsClicked(prev => !prev)}/>

                <ul className={`${isClicked ? style.options : style.none}`} >
                    {
                    makes.map( (make, idx) => (
                        <li className={style.option} key={idx} onClick={() => makeHandler(make)}>
                            {make}
                        </li>  
                    )
                    )}
                </ul>
            </>
        }

        <div className={style.arrow}>
            <GoTriangleDown className={style.icon}/>
        </div>
        
    </div>
  )
}

export default CustomSelect