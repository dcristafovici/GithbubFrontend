import { CHANGE_PERPAGE } from '../action-types/filterTypes'
  
const initialState = {
  per_page: 30
}

export const filterReducer = (state = initialState, action:any) => {
  switch(action.type){
    case CHANGE_PERPAGE:
      return{
        ...state,
        per_page: action.payload
      }
    default: 
      return state

  }
}