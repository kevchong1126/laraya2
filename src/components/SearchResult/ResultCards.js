import React, { useEffect, useState } from 'react'
import style from './ResultCards.module.scss'
import ResultCard from './ResultCard'

import db from '../../data/db.json'
import productsFilter from '../../util/productsFilter'

import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

const ResultCards = () => {
  const filterState = useSelector( state => state.filterSelect);
  const { car, mode, category, sort } = filterState;
  
  const { searchquery } = useParams();
  const [products, setProducts] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);
  const qtyPerPage = 20;
  const pagesVisited = pageNumber * qtyPerPage;

  useEffect(() => {
    const newProducts = productsFilter(db, searchquery, filterState);
    console.log(filterState)
    setPageNumber(0)
    setProducts(newProducts);
    
  }, [searchquery, sort]);

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
              <h3 className={style.productLength}> Mostrando "{products.length}" producto(s)</h3>
              
              <div className={style.grid}>
                {
                  products.slice(pagesVisited, pagesVisited+qtyPerPage).map(el => <ResultCard key={el.id} product={el}/>)
                }
              </div>
      
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