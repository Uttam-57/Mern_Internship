import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
            <Link to="/watch/One Piece">One Piece</Link>
          </li>
          <li>
            <Link to="/watch/Money Heist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/BREAKING BAD">BREAKING BAD</Link>
          </li>
          
          
        </ul>
    </div>
  )
}
