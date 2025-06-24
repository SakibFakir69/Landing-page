

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <nav className='flex justify-between items-center bg-hero'>

            <div>
                {/* logo */}
                <img width="100" height="100" src="https://img.icons8.com/keek/100/code-file.png" alt="code-file"/>
            </div>

            <div>
                <NavLink>Home</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>Testimonials</NavLink>
                <NavLink>Blog</NavLink>
                <button className='bg-[RGB 70 181 238]'>FREE TRIAL</button>

            </div>


        </nav>





    </div>
  )
}

export default Navbar