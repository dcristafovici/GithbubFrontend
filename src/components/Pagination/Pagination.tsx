import React, { useEffect, useState } from 'react'
import "./Pagination.sass"
import { useTypeSelector } from "../../types/useTypeSelector"
import { useDispatch } from 'react-redux'
import { fetchIssues } from '../../redux/actions/issuesAction'

const Pagination:React.FC = () => {

  const dispatch = useDispatch()

  const [pages, setPages] = useState(Array)
  const [currentPage, setCurrentPage] =  useState(1)
  const { totalCount , issues } = useTypeSelector(state => state.issuesReducer)
  const { per_page } = useTypeSelector(state => state.filterReducer)

  useEffect(() => {    
      const arr = Array.from({length: Math.ceil(totalCount / per_page)}, (_, i) => i + 1)
      setPages(arr)
  }, [issues])
  
  
  const onGetIssues = async(page:number) => {
    await dispatch(fetchIssues('facebook', 'react' , per_page, page))  
    setCurrentPage(page)

  }

  return(
    <section className="pagination">
      <div className="container">
        <div className="pagination-list">
          <ul>
            {pages.map((page:any) => {
              return(
                <li 
                  key={page}  
                  className={page == currentPage ? "current": ""}
                  onClick={() => onGetIssues(page)}
                  >
                  {page}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pagination