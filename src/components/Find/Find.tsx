import React from 'react'
import './Find.sass'
const Find:React.FC = () => {
  return(
    <section className="find">
      <div className="container">
        <div className="find-form">
          
          <div className="form-group">
            <input type="text" placeholder='Названия пользователя'/>
          </div>
          
          <div className="form-group">
            <input type="text" placeholder='Названия репозитория'/>
          </div>
          
          <div className="form-button">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Find