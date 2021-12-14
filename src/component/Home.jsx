import Hero from "./Hero";
import Category from './Category'
import NnN from './NnN'

let Home = () =>{



    return(<>
  
 <Hero/>

 <div className='cat_home'>
 <h2>Category</h2>
<Category/>

<h2>News & Notices</h2>
<NnN />
 </div>
  
    </>)
  }
  
  
  export default Home;