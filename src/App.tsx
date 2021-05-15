import React from 'react';
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Find from './components/Find/Find'
import Issues from './components/Issues/Issues'
import Pagination from './components/Pagination/Pagination'

const App:React.FC = () => {
  return (
    
    <main className='main-github'>
      <Header />
      <Filter />
      <Find />
      <Issues />
      <Pagination />
    </main>
    
  );
};

export default App;
