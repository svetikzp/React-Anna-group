import React from 'react'

function Person({person}) {
   return (
     <div>
       {person && person.length ?  (
         person.map((person, index) => (
           <ul key={index}>
             <li>First name: {person.firstName}</li>
             <li>Last name: {person.lastName}</li>
             <li>Email: {person.email}</li>
             <li>Phone: {person.phone}</li>
             <li>Cell: {person.cell}</li>
           </ul>
         ))
       ) : (
         <div>Loading...</div>
       )
     }
     </div>
   );
 }


 export default Person;