import React, { useEffect } from 'react'
import IssuesItem from './IssuesItem'
import "./Issues.sass"
import { useTypeSelector } from '../../types/useTypeSelector'

const Issues:React.FC = () => {
  

  const {issues, error} = useTypeSelector(state => state.issuesReducer)
  return(
    <section className='issues' >
      <div className="container">
        {error ? (
          <div className="error-danger">
            {error}
          </div>
        ): ""}
        <div className="issues-items">
          {issues.length ? issues.map((item:any, index:any) => {
            return(
              <IssuesItem user={item?.user} title={item.title} date={item.created_at} number={item.number} key={item.number} />
            )
          }) : ""}

        </div>
      </div>
    </section>
  )
}

export default Issues