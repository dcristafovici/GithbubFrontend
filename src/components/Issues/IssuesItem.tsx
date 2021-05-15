import React from 'react'
import { Link } from 'react-router-dom'

interface UserInterface {
  user: {
    avatar_url: string,
    login: string
  },
  title: string,
  date: string,
  number: string
}
const IssuesItem:React.FC<UserInterface> = ( { user, title , date , number} ) => {
  const newDate = new Date(date)
  return(
    <div className="issues-item">
      <div className="issues-item__left">
        <div className="issues-item__photo">
          <img src={user.avatar_url} alt={user.login}/>
        </div>

        <Link to={'issue/' + number} className="issues-item__name">
          <span>{title}</span>
        </Link>
      </div>
      <div className="issues-item__right">
        <div className="issues-item__general">
          <span>#{number} opened on {newDate.getDay()}th {newDate.getMonth()} - Month</span>
        </div>
      </div>
    </div>
  )
}

export default IssuesItem