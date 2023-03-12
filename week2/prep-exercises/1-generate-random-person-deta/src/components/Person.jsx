import React from 'react'

export default function Person({ firstName, lastName, email }) {
   return (
      <ul className='listPerson'>
    <li>First name: {firstName}</li>
    <li>Last name: {lastName}</li>
    <li>Email: {email}</li>
  </ul>
   )
}