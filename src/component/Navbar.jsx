import { NavLink } from "react-router-dom";
import Footer from "./Footer";

let Navbar = () =>{



    return(<>

<div className='navbar'>

<div className='logo'>
<h3>LokSewa <span style={{color: 'orangered'}}> Capsule </span></h3>
</div>
    
<div className='menu'>
  <NavLink to='/' className='nav_item'>Home</NavLink>
  <NavLink to='/services' className='nav_item'>Services</NavLink>
  <NavLink to='/about' className='nav_item'>About</NavLink>
  <NavLink to='/contact' className='nav_item'>Contact</NavLink>

</div>
</div>



  
    </>)
  }
  
  
  export default Navbar;