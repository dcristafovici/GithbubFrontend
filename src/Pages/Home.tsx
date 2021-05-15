import React from 'react'
import Filter from '../components/Filter/Filter'
import Find from '../components/Find/Find'
import Issues from '../components/Issues/Issues'
import Pagination from '../components/Pagination/Pagination'

const Home = () => {

  return(
    <React.Fragment>
      <Filter />
      <Find />
      <Issues />
      <Pagination />
    </React.Fragment>
  )
  
}

export default Home