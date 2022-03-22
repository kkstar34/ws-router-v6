import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Accueil(props) {

   
  return (
      <div>
        <nav>
           
           Liste des utilisateurs
            <br />
            {props.users.map(user => 
            <> 
                <Link  to={`user/details/${user.id}`} > {user.name}  </Link>
                <br />
                <hr />
             </> )}
        </nav>
      </div>
  )
}


export default Accueil