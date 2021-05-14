import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { fetchIssues } from '../../redux/actions/issuesAction'
import axios from 'axios'
import './Find.sass'


const Find:React.FC = () => {

  const [form, setForm] = useState({
    user: "",
    repository: ""
  })
  const dispatch = useDispatch();

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    setForm({...form, [e.currentTarget.name]: e.currentTarget.value})
  }

  const onSubmitForm = async(e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await dispatch(fetchIssues(form.user, form.repository))
  }


  return(
    <section className="find">
      <div className="container">
        <div className="find-form">
          
          <div className="form-group">
            <input type="text" name='user' onChange={onChangeHandler} placeholder='Названия пользователя'/>
          </div>
          
          <div className="form-group">
            <input type="text" name='repository' onChange={onChangeHandler} placeholder='Названия репозитория'/>
          </div>
          
          <div className="form-group">
            <button className="button" onClick={onSubmitForm}>
              <span>Поиск</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Find