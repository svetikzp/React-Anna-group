import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
   return (
      <div>
         <h1 align="center">404 not Found!</h1>
         <Link to="/">Go Home</Link>
      </div>
   )
}