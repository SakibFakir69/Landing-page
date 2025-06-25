import { useState } from 'react'
import Homelayouts from './layout/Homelayouts'
import Navbar from './layout/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'




function App() {


  return (
    <div>
     <nav>
       <Navbar/>
     </nav>

    <main>
       <Outlet/>
    </main>
     
     <footer>
       <Footer/>
     </footer>

     
    </div>
  )
}

export default App
