import React from 'react'
import style from './ResultHeader.module.scss'

import { useParams } from 'react-router-dom'

const ResultHeader = () => {
    const { searchquery } = useParams();
    const newQuery = searchquery.split('-').join(' ');

  return (
    <div className={style.container}>
        <div className={style.content}>
            <h2 className={style.title}>{newQuery}</h2>
        </div>
    </div>
  )
}

export default ResultHeader