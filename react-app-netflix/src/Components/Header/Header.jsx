import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
           <ul>
            <li><img src="" alt="" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
           </ul>       
        </div>
        <div className='header-right'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>        
        </div>
      </div>
    </div>
  )
}

export default Header
