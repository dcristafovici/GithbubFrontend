import { combineReducers } from 'redux'
import { issuesReducer } from './issuesReducer'
import { filterReducer } from './filterReducer'
import { formReducer } from './formReducer'
 
export const rootReducer = combineReducers({
  issuesReducer,
  filterReducer,
  formReducer
})

export type RootState = ReturnType<typeof rootReducer>