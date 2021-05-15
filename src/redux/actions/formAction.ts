import {SET_DATA} from '../action-types/formTypes'

export const setFormData = (user:string, repository: string) => (dispatch:any) => {

  dispatch({
    type: SET_DATA,
    payload: {
      user,
      repository
    }
  })
} 