import React from 'react'
import style from './NavbarMobile.module.scss'

import { BsFillCartFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"

import { Link } from 'react-router-dom'

const NavbarMobile = ({close}) => {
  return (
    <div className={`${style.linksMobileContainer}  ${close ? style.show : ''}`}>
        <div className={style.linksMobileContent}>
            <ul className={style.linksMobile}>
                <li className={style.linkMobile}><Link to='/laraya' className={style.linkTag}>Home</Link></li>
                <li className={style.linkMobile}><Link to='/category' className={style.linkTag}>Categories</Link></li>
            </ul>
            <div className={style.mobileBtnContainer}><Link className={style.cartBtn} to='/cart'><BsFillCartFill className={style.icon}/>Cart</Link></div>
            <div className={style.mobileBtnContainer}><Link className={style.loginBtn} to='/login'><FaUserAlt className={style.icon}/>Login</Link></div>
        </div>
    </div>
  )
}

export default NavbarMobile