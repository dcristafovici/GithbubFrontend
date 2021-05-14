import { combineReducers } from 'redux'
import { issuesReducer } from './issuesReducer'
 
export const rootReducer = combineReducers({
  issuesReducer
})

export type RootState = ReturnType<typeof rootReducer>