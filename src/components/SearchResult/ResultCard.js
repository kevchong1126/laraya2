import React from 'react'
import style from './ResultCard.module.scss'

import { BsCartPlus } from "react-icons/bs"

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../store/actionCreators/cartItemsCreator';

const ResultCard = ({product}) => {
    const dispatch = useDispatch();
    const { products } = useSelector( el => el.cartItems);
    const {img, partNo, properties, id, name, price} = product;
    
    const AddItemHandler = () => {
        dispatch(ADD(product, 1));
    }

  return (
    <div className={style.container}>
        <div className={style.content}>

            <Link className={style.top} to={`/prod/${id}`} >
                <div className={style.imgContainer}>
                    <img src={process.env.PUBLIC_URL + img} alt='' />
                </div>
            </Link>

            <div className={style.bottom}>

                <div className={style.info}  >
                    <Link className={style.titleLink} to={`/prod/${id}`}>
                        <h3 className={style.title}>{name}</h3>
                    </Link>
                    <ul className={style.properties}>
                        <li className={style.property}>Codigo: {partNo.toUpperCase()}</li>
                        <li className={style.property}>Categoria: {properties['category'].toUpperCase()} </li>
                    </ul>
            
                </div>

                <div className={style.priceContainer}>
                    <p className={style.price}><span>₡</span>{price}</p>

                    {
                        !products.find( el => el.id === id) ?

                        <button className={style.addBtn} onClick={AddItemHandler}>Agregar a Carrito</button>
                        :
                        <Link className={style.goToCart} to='/cart'>Ir a Carrito</Link>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultCard