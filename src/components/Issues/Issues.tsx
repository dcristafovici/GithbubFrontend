import React, { useEffect } from 'react'
import IssuesItem from './IssuesItem'
import "./Issues.sass"

const Issues:React.FC = () => {
  


  return(
    <section className="issues">
      <div className="container">
        <div className="issues-items">

          <IssuesItem />
          <IssuesItem />
          <IssuesItem />
          <IssuesItem />
     


        </div>
      </div>
    </section>
  )
}

export default Issues