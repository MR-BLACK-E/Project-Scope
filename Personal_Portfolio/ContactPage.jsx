import { Link } from "react-router-dom";
import FormPage from "./FormPage";
import './Portfolio.css';


function Contact() {
    return (
      <div className="">
         <div style={{height:200}}>
       <ul style={styles.head}  >
    <li><h2 className='h1'>CONTACT</h2></li>
    <li><h2 className='h2'><span>GET IN</span><span style={{color:'rgb(255, 174, 0)'}}> TOUCH</span></h2></li>
  </ul>
     </div>

     <div style={{marginBottom:50}} class="container text-center  ">
  <div class="row">
    <div style={{textAlign:"center"}} style={styles.col} class="col-4">
      <h4 style={styles.h4}>DON'T BE SHY !</h4>
      <p className="mb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      <div style={{}}>
        <img style={{width:"40px",}} src="public/bx-map-alt.svg"/><span style={{color:"rgba(5, 5, 5, 0.2);"}}>ADDRESS POINT</span>
       <div className="mb-3"> avanue-10, BankRoad,Kaloor,Ernakulam</div>
       <img  style={{width:"40px",}}src="public/bxs-envelope.svg"/>MAIL ME
       <div className="mb-3">emilmathew1311@gmail.com</div>
       <div>
        <img style={{width:"30px",}} src="public/telephone-fill.svg"/>CALL ME
        <div>+91 9947845653</div> 
       </div>
       
      </div>
       <div className="mt-4 contact">
      <Link to="https://www.facebook.com/profile.php?id=100007685417527" className="contact" style={styles.link}><div className="hoverr navimg contact" ><img  src="public/bxl-facebook.svg"/></div></Link>
      <Link to="tel:+91 9947845653" style={styles.link}><div className="hoverr navimg contact" ><img  src="public/bxl-whatsapp.svg"/></div></Link>
      <Link to="https://www.instagram.com/b_l_a_c_k.boy?igsh=ZmZieXI5ZGd6bDh0" style={styles.link}><div className="hoverr navimg contact" ><img src="public/bxl-instagram.svg"/></div></Link>
      <Link to="" style={styles.link}><div className="hoverr navimg contact" ><img src="public/envelope-at-fill.svg"/></div></Link>
      </div> 
      
    </div>
    <div class="col-8">
      <FormPage/>
    </div>
  </div>
</div>

      </div>
    )
  }
  
  const styles = {
     head:{textAlign: "center", marginTop: "10px",paddingRight:"560px"},
    h4:{
      color:"rgb(76, 75, 75)",
      fontWeight:"600",
    },
    col:{
      textAlign:"left"
    },
    link:{
      display:"flex",
      display:"inlineBlock",
      alignItems:"center",
      placeItems:"center",
      padding:"10px",
    },
    navList:{
      display:"inlineBlock",
      display:""
    },
    
    };
  
  export default Contact;
  

