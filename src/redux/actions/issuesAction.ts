import axios from 'axios'
import { 
  FETCH_ISSUES_START, 
  FETCH_ISSUES_SUCCESS, 
  FETCH_ISSUES_FAIL 
  } from '../action-types/issuesTypes'
  
export const fetchIssues = (user:string, repository:string, count:number, page:number) => async(dispatch:any) => {
  try{
    dispatch({
      type: FETCH_ISSUES_START,
    })
    const { data } = await axios.get('http://localhost:8000/api/issues', {params: {user, repository, count , page}})
    
    dispatch({
      type: FETCH_ISSUES_SUCCESS,
      payload: data
    })
    
  } catch(error){
    dispatch({
      type: FETCH_ISSUES_FAIL,
      payload: error.response && error.response.data.err
        ? error.response.data.err
        : error.message
    })
  }
}