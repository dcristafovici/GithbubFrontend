import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { fetchIssues } from '../../redux/actions/issuesAction'
import { useTypeSelector } from '../../types/useTypeSelector'
import { setFormData } from '../../redux/actions/formAction'
import './Find.sass'


const Find:React.FC = () => {

  const [form, setForm] = useState({
    user: "",
    repository: ""
  })
  const { per_page } = useTypeSelector(state => state.filterReducer)
  const { loading  } = useTypeSelector(state => state.issuesReducer)
  const { user, repository } = useTypeSelector(state => state.formReducer)
  const dispatch = useDispatch();

  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
    setForm({...form, [e.currentTarget.name]: e.currentTarget.value})
  }

  const onSubmitForm = async(e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setFormData(form.user, form.repository))
    await dispatch(fetchIssues(form.user, form.repository , per_page, 1))
  }


  return(
    <section className={loading ? "find find-disabled" : "find"} >
      {loading ? (
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ): ""}
      <div className="container">
        <div className="find-form">
          
          <div className="form-group">
            <input type="text" name='user' defaultValue={user || "" } onChange={onChangeHandler} placeholder='Названия пользователя'/>
          </div>
          <div className="form-group">
            <input type="text" name='repository'  defaultValue={repository || "" } onChange={onChangeHandler} placeholder='Названия репозитория'/>
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