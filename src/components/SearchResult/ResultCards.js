import React, { useEffect, useState } from 'react'
import style from './ResultCards.module.scss'
import ResultCard from './ResultCard'

import db from '../../data/db.json'

import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

const ResultCards = () => {
  const { searchquery } = useParams();
  const [products, setProducts] = useState(null);
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
  const { car } = useSelector( el => el.selectedCar);
  const [fitsCar, setFitsCar] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const qtyPerPage = 10;
  const pagesVisited = pageNumber * qtyPerPage;

  useEffect(() => {
    const splitQuery = searchquery.split('-');
    const ht = {};

    const newProducts = db.filter( product => {
        const { name, partNo, properties, desc, make } = product;
        const { category, subCategory } = properties;

        if (selectedCar){
          setFitsCar(true);

          return splitQuery.every( word =>
          name.includes(word) ||
          desc?.includes(word) ||
          category?.includes(word) ||
          subCategory?.includes(word) ||  
          partNo === word)
          
          && selectedCar === make
                 
        }
        else {
          setFitsCar(false);

          if (splitQuery.every( word => 
            name.includes(word) ||
            desc?.includes(word) ||
            category?.includes(word) ||
            subCategory?.includes(word) ||  
            partNo === word ) && 
            
            !ht[partNo]){
              ht[partNo] = true;
              return true
          }
        } 
        
        return false
    })

    setPageNumber(0)
    setProducts(newProducts);
    
  }, [searchquery, car, selectedCar]);

  const pageCount = products ? Math.ceil(products.length / qtyPerPage) : 0;

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  
  const renderProducts = () => {
    if (!products || !products.length){
      return (
        <div className={style.noProducts}>
            <h1>:(</h1>
            <h2>Could not find any part with that description</h2>
        </div>
      )
    }

    return (<>
              <h3 className={style.productLength}> Showing "{products.length}" product(s)</h3>
              {
              products.slice(pagesVisited, pagesVisited+qtyPerPage).map(el => <ResultCard key={el.id} product={el} fits={fitsCar}/>)
              }
              <ReactPaginate 
                previousLabel='Previous'
                nextLabel='Next'
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={style.paginate}
                previousLinkClassName={style.changeBtn}
                nextLinkClassName={style.changeBtn}
                disabledClassName={style.disabled}
                activeClassName={style.currBtn}
              />
            </>
    )
  }
  
  return ( 
    <div className={style.container}>
        {
          renderProducts()
        }   
    </div>
  )
}

export default ResultCards