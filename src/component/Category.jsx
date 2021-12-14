import React from 'react';
import CategoryList from './CategoryList'
import './Category.css';
let Category = () =>{


    return(<>
<div className='category'>
   
   {
        CategoryList.map((val)=>{
            return(
<div className='cat_box'>
                <img src ={val.img} />
                <h3>{val.topic}</h3>
                <button onClick={()=>{alert('Button Clicked')}}>Open</button>
</div>
            )
        })
    }
</div>

    </>)
}


export default Category;