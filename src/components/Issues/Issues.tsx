import React, { useEffect } from 'react'
import IssuesItem from './IssuesItem'
import "./Issues.sass"
import { useTypeSelector } from '../../types/useTypeSelector'

const Issues:React.FC = () => {
  

  const {issues, errors, loading} = useTypeSelector(state => state.issuesReducer)
  console.log(issues) 

  return(
    <section className="issues">
      <div className="container">
        <div className="issues-items">
          {issues.length ? issues.map((item:any, index:any) => {
            console.log(item)
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