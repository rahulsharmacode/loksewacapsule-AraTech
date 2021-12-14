import NnNList from './NnNList';
import './Category.css'

let NnN = () =>{



    return(<>
  <div className='NewsLetter'>
{
    NnNList.map((val)=>{
      return  (<div className='NewsBox'>
      <i class="fa  fa-rss-square"></i>
      <h3>Advertisement No: {val.newsid}</h3>
      <p>{val.newPreview}</p>
      <button onClick={()=>{alert('Button Clicked')}}> <i class="fa fa-cloud-download"></i></button>
      <button onClick={()=>{alert('Button Clicked')}}> <i class="fa fa-share-alt"></i></button>


        </div>)
    })
}

  </div>
  
  
    </>)
  }
  
  
  export default NnN;