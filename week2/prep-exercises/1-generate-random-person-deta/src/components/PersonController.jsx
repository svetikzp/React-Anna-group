import React, { useState, useEffect } from "react";
import Person from './Person'
import Button from './Button';

function PersonController() {
   const[person, setPerson] = useState(null);
   const getPerson = async() => {
     const response = await fetch ('https://www.randomuser.me/api?results=1');
     const data = await response.json();
     const person = data.results.map(({name, email, phone, cell}) => ({
       firstName: name.first,
       lastName: name.last,
       email,
       phone,
       cell
     }));
 
     setPerson(person);
   };
 
   useEffect(() => {
     getPerson();
   }, []);
 
   const handleClick = () => {
     setPerson([]);
     getPerson();
   };
 
   return (
     <>
       <Person person={person} />
       <Button onClick={handleClick} text="New person details" />
     </>
   );
 }
 
 export default PersonController;
 
 
 

 