import React,{ Component} from 'react';
import Header from './components/Header';
import './styles.css';
import Main from './pages/Main';
import Contador from './components/Contador'

const App = () => (
  
    <div className="App">
      <Header/>
      <div className = "aligner"> 
        <Main/>
        <Contador/>
      </div>
    </div>
    
  
);

export default App;
