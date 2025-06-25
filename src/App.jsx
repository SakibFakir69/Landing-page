import { useState } from 'react'
import Homelayouts from './layout/Homelayouts'
import Navbar from './layout/Navbar'
import Footer from './components/Footer'




function App() {


  return (
    <div>
     <nav>
       <Navbar/>
     </nav>

    <main>
        <Homelayouts/>
    </main>
     
     <footer>
       <Footer/>
     </footer>

     
    </div>
  )
}

export default App
