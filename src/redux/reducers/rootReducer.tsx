import { combineReducers } from 'redux'
import { issuesReducer } from './issuesReducer'
import { filterReducer } from './filterReducer'
 
export const rootReducer = combineReducers({
  issuesReducer,
  filterReducer
})

export type RootState = ReturnType<typeof rootReducer>