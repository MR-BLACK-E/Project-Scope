import React from 'react'
import './Portfolio.css';
import MySkill from './MySkill';

function About() {
    return( 
    <div  >
      <div style={{height:200}}>
       <ul  style={styles}  >
    <li><h2 className='h1'>RESUME</h2></li>
    <li><h2 className='h2'>ABOUT <span style={{color:'rgb(255, 174, 0)'}}> ME</span></h2></li>
  </ul>
     
      </div>
     <div style={{marginBottom:0,paddingInline:"30px"}} className='mt- '>
      <div className='container-fluid py-5'>
      <div className="container text-center py-5 ">
  <div className="row">
    <div className="col-lg-6">
      <h3>PERSONAL INFO</h3>
      
      
      <ol className='infos'>
        <li>First Name:EMIL<span style={{padding:'110px'}}  >Second Name:MATHEW </span></li>
        <li>Age:26<span style={{padding:'180px'}} >Nationality:INDIA </span></li>
        <li>Freelance:<span style={{color:"greenyellow"}} >Avilable</span><span style={{padding:'100px'}} >Place:IDUKKI </span></li>
        <li>Mobile:9947845653<span style={{padding:'90px'}} >Email:emilmathew1311@gmail.com </span></li>
        <li>Insta:@B_l_a_c_k.boy<span style={{padding:'70px'}}>Languages:Malayalam,Tamil,Hindi,English </span></li>




      </ol>
       <div style={{paddingLeft:"0px"}} >
      </div> 
      
    </div>

    <div className="col-lg-6 wrapper">
      <div className="row row-cols-2">
      
        <div className="col-8 col-sm-6">
          
          <div class="card w-100" style={{background:"rgba(211, 211, 211, 0.481)"}}>
  <div className="card-body">
    <h5 className="card-title">6+</h5>
    <h6 className="card-text">MONTHS OF</h6>
    <h6 className="card-text">EXPERIENCE</h6>

  </div>
</div>
        </div>
      
        <div className="col-8 col-sm-6">
          
          <div class="card w-100 mb-4" style={{background:"rgba(211, 211, 211, 0.481)"}}>
  <div className="card-body" >
    <h5 className="card-title">2+</h5>
    <h6 className="card-text">COMPLETED</h6>
    <h6 className="card-text">PROJECTS</h6>

  </div>
</div>
        </div>
        
        <div className="col-4 col-sm-6">
          
          <div class="card w-100" style={{background:"rgba(211, 211, 211, 0.481)"}}>
  <div className="card-body">
    <h5 className="card-title">2+</h5>
    <h6 className="card-text">HAPPY</h6>
    <h6 className="card-text">CUSTOMERS</h6>

  </div>
</div>
        </div>

        <div className="col-4 col-sm-6">
          
          <div class="card w-100" style={{background:"rgba(211, 211, 211, 0.481)"}}>
  <div className="card-body">
    <h5 className="card-title">0+</h5>
    <h6 className="card-text">AWARD</h6>
    <h6 className="card-text">WON</h6>


  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div> 


 <section>
 <MySkill/>
 </section>
    </div>
    )
  }
  const styles = { textAlign: "center", marginTop: "10px" };
  
  export default About
  