import React from 'react'
import { useParams } from 'react-router-dom'

function Details(props) {

  
    let id = useParams().id;

    
    let user = props.users.find((user) => user.id === id);
    

  return (
    <div>
        nom : {user.name}
        <br />
        enfants : {user.childrens}
        <br />
        situation matrimoniale : {user.marital_status}
        profession : {user.job}
    </div>
  )
}

export default Details