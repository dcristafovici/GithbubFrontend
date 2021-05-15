import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Comments:React.FC = () => {
  const [comments , setComments] = useState({})

  useEffect(() => {
    const getComments = async() => {
      const response = await axios.get('https://api.github.com/repos/facebook/react/issues/21510/comments')
      setComments(response.data)
    } 
    getComments()

  }, [])

  return(
    <section className="comments">

      <div className="container">

          <div className="comments-items">
            
            <div className="comments-item"></div>

          </div>

      </div>

    </section>
  )
}

export default Comments