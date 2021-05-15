import React, { useEffect, useState } from 'react'
import { useParamsInterface } from '../../Interfaces/useParamsInterface'
import { useParams } from 'react-router'
import "./Issue.sass"
import axios from 'axios'

interface iIssue {
  title: string,
  user: {
    avatar_url: string,
    login: string
  },
  body: string,
  labels: [],
}


const Issue:React.FC = () => {

  const [issue, setIssue] = useState<iIssue>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { id } = useParams<useParamsInterface>()
  
  const getIssue = async() => {
    try{
      const result = await axios.get(`http://localhost:8000/api/issue`, {params: { user: 'facebook', repository: 'react', number: id }})
      setLoading(false)
      setIssue(result.data)
    } catch(err){
      console.log(err)
      setLoading(false)
      setError(err.meesage)

    }
  }

  useEffect(() => {
    getIssue()
  }, [])


  return(
    <section className="issue">
      <div className="container">
        <div className="issue-name">
          {issue?.title}
        </div>
        {console.log(issue)}
        <div className="issue-labels">
          {issue?.labels.map((label:any) => {
            {console.log(label)}
            return(
              <div className="issue-label" style={{backgroundColor: '#' + label.color}}>
                {label.name}
              </div>
            )
          })}
        </div>
        <div className="issue-author">
          <div className="issue-author__photo">
            <img src={issue?.user?.avatar_url} />
          </div>
          <div className="issue-author__name">{issue?.user?.login}</div>
          <div className="issue-author__date">commented 10 hours ago • </div>
        </div>

        <div className="issue-body">
          <pre>{issue?.body}</pre>
        </div>

      </div>
    </section>
  )
}

export default Issue