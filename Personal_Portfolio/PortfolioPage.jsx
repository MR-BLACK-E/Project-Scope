import { Link } from 'react-router-dom';
import './Portfolio.css';
import All from './All';

function Portfolio() {
    return (
      <div className='height'>
         <div style={{height:200}}>
       <ul  style={styles}  >
    <li><h2 className='h1'>WORKS</h2></li>
    <li><h2 className='h2'>MY <span style={{color:'rgb(255, 174, 0)'}}> PORTFOLIO</span></h2></li>
  </ul>
     
      </div>

      <div>
        <nav className='nav'>
          
            <li><Link to="/PortfolioPage/All" className='navLink'>ALL</Link></li>
            <li><Link className='navLink'>LOGO</Link></li>
            <li><Link className='navLink'>VIDEO</Link></li>
            <li><Link className='navLink'>GRAPHIC DESIGN</Link></li>
            <li><Link className='navLink'>MOCKUP</Link></li>
          
        </nav>
      </div>
      <All/>
      </div>
    )
  }
  
  const styles = { textAlign: "center", marginTop: "10px" };
  
  export default Portfolio
  