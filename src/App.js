import React from 'react';
import "./styles/App.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ErrorPage from './pages/Error/ErrorPage';
import FicheLogement from './pages/Logement/FicheLogement';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
  <div className="App">
    <Header/>
      <main >      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Logement/:fiche/" element={<FicheLogement/>}/>
          <Route path="*" element={<ErrorPage/>}/> 
        </Routes>
    
      </main>
    <Footer/> 
              
  </div>)
  
}

export default App;
