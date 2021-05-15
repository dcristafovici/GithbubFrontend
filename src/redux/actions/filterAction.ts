import { CHANGE_PERPAGE } from '../action-types/filterTypes'

export const changePerPage = (count: number) => (dispatch:any) => {
  dispatch({
    type: CHANGE_PERPAGE,
    payload: count
  })

}