import axios from 'axios'
import { 
  FETCH_ISSUES_START, 
  FETCH_ISSUES_SUCCESS, 
  FETCH_ISSUES_FAIL 
  } from '../action-types/issuesTypes'
  
export const fetchIssues = (user:any, repository:any) => async(dispatch:any) => {
  console.log(user, repository)
  try{
    dispatch({
      type: FETCH_ISSUES_START,
    })
    const { data } = await axios.get('http://localhost:8000/api/issues', {params: {user, repository}})
    
    dispatch({
      type: FETCH_ISSUES_SUCCESS,
      payload: data
    })
    
  } catch(error){
    dispatch({
      type: FETCH_ISSUES_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}