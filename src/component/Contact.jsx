import './Contact.css'
let Contact = () =>{

    let checkForm = (e)=>{
        e.preventDefault();
    }


    return(<>
  
  
<div className='contact'>

<p>We Listen you</p>
<h3>Message Us</h3>


<div className="forms">

    <form onSubmit={checkForm}>
    <input type='text' placeholder="Enter Name" /><br/>
    <input type='email' placeholder="Enter email" /><br/>
    <input type='number' placeholder="Enter Number" /><br/>
    <textarea placeholder="Message"/><br/><br/>
    <input type='submit' className="submit"/>


    </form>

    <img src='img/aratech.png' alt="contact-img" />
    
    
</div> 

<div className='contactinfo'>
    <i class="fa fa-globe"><a href='https://aratechsolution.com/'>www.aratech.com</a></i>
    <i class="fa fa-envelope"><a href='#'>aratech077@gmail.com</a></i>
    <i class="fa fa-facebook-square"><a href='#https://www.facebook.com/AraTechSolutionATS/'>facebook.com/AraTechSolutionATS</a></i>
    </div>


</div>
    </>)
  }
  
  
  export default Contact;