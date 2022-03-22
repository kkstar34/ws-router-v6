import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Accueil from './components/Accueil';
import Contact from './components/Contact';
import Biographie from './components/Biographie';
import Details from './components/Details';
import { useState } from 'react';

function App() {

  let [users, setUsers] = useState(
        
    [
        {
            id : 1,
            name : 'John',
            job : 'Enseignant',
            childrens : 3,
            marital_status : 'Marié'
        },
        {
            id : 2858478,
            name : 'Eric',
            job : 'Infirmier',
            childrens : 1,
            marital_status : 'Celibataire'
        }
    ]
    
    );
  return (
    <>
      <Routes>
          <Route path="/" element={<Accueil users={users}/>}/>
          <Route path="index" element={<Home />}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="biographie" element={<Biographie/>}/>
          <Route path="user/details/:id" element={<Details users={users}/>}/>
      </Routes>
    </>
  );
}

export default App;
