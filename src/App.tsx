import React from 'react';
import Header from './components/Header/Header'
import Find from './components/Find/Find'
import Issues from './components/Issues/Issues';
const App:React.FC = () => {
  return (
    
    <main className='main-github'>
      <Header />
      <Find />
      <Issues />
    </main>
    
  );
};

export default App;
