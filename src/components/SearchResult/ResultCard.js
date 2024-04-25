import React from 'react'
import style from './ResultCard.module.scss'

import { BsCartPlus } from "react-icons/bs"

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../store/actionCreators/cartItemsCreator';

const ResultCard = ({product, fits}) => {
    const dispatch = useDispatch();
    const { products } = useSelector( el => el.cartItems);
    const {img, desc, properties, id, name, price} = product;
    
    const AddItemHandler = () => {
        dispatch(ADD(product, 1));
    }

  return (
    <div className={style.container}>
        <div className={style.content}>

            <Link className={style.left} to={`/prod/${id}`} >
                <div className={style.imgContainer}>
                    <img src={process.env.PUBLIC_URL + img} alt={desc?.substring(0,25)} />
                </div>
            </Link>

            <div className={style.right}>

                <div className={style.top}  >
                    <Link className={style.titleLink} to={`/prod/${id}`}>
                        <h3 className={style.title}>{name}</h3>
                    </Link>
                    <p className={style.price}>₡{price}</p>
                    {
                        fits && <div className={style.fits}>Fits Your Car</div>
                    }
                </div>

                <div className={style.bottom}>
                    <ul className={style.properties}>
                        {
                            properties && (Object.entries(properties)).map( (property, idx) => {
                                return  <li key={idx} className={style.property}>
                                            {property[0].toUpperCase()} : {property[1]}
                                        </li>
                            })
                        }
                    </ul>
                    {
                        !products.find( el => el.id === id) ?

                        <button className={style.addBtn} onClick={AddItemHandler}> <BsCartPlus className={style.addIcon} />Add to Cart</button>
                        :
                        <Link className={style.goToCart} to='/cart'>Go to Cart</Link>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultCard