import { 
  FETCH_ISSUES_START, 
  FETCH_ISSUES_SUCCESS, 
  FETCH_ISSUES_FAIL } from '../action-types/issuesTypes'
  
const initialState = {
  issues : [],
  loading: false,
  error: '',
  totalCount: 0
}
export const issuesReducer = (state = initialState, action:any) =>{
  switch(action.type){

    case FETCH_ISSUES_START:
      return{
        ...state,
        loading: true,
        issues: [],
        error: ''
      }
    
    case FETCH_ISSUES_SUCCESS:
      return{
        ...state,
        loading: false,
        issues: action.payload.data,
        totalCount: action.payload.count
      }

    case FETCH_ISSUES_FAIL:
      return{
        ...state,
        issues: [],
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}