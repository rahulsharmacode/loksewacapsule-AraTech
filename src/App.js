import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Services from './component/Services'
import About from './component/About'
import Contact from './component/Contact'




let App = () =>{



  return(<>
<Navbar/>

<Routes>
  <Route exact path='/' element={<Home/>} />
  <Route path='/services' element={<Services/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />

</Routes>

<Footer/>


  </>)
}


export default App;