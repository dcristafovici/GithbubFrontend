import React, { useState } from 'react'
import "./Filter.sass"
import { useDispatch } from 'react-redux'
import { changePerPage } from '../../redux/actions/filterAction'
const Filter:React.FC = () => {
  const [items, setItems] = useState([
    { name: 10, id: 0, active: false },
    { name: 20, id: 1, active: false },
    { name: 30, id: 2, active: true },
    { name: 50, id: 3, active: false },
  ])
  
  const dispatch = useDispatch()

  const onChangeClasss = (id:number, number:number) => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? {
              ...item,
              active: true
            }
          : {
            ...item,
            active: false
          }
      )
    );

    dispatch(changePerPage(number))
  }
  
  return(
    <section className='filter'>
      <div className="container">
        <div className="filter-name">Количество записей на страницу</div>
        <div className="filter-list">
          <ul>
            {items.map((item:any) => {
              return(
                <li 
                  className={item.active ? "active" : ""} 
                  key={item.id}
                  onClick={() => onChangeClasss(item.id, item.name)}
                  > 
                  { item.name } 
                </li>
              )
            })}

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Filter