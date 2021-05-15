import { SET_DATA } from '../action-types/formTypes'
const initialState = {
  user: "",
  repository: ""
}

export const formReducer = (state = initialState,  action:any) => {

  switch(action.type){
    case SET_DATA:
      return{
        ...state,
        user: action.payload.user,
        repository: action.payload.repository
      }
    default: 
      return state
  }

}