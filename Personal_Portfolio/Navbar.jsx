import { Link } from "react-router-dom";
// import Onhover from "./WEBPAGE/PORTFOLIO/Onhover";
import './Portfolio.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary" >
    <nav  style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}><div className="hoverr navimg mb" ><div></div><img style={{width:20}} src="public/bxs-home.svg"/></div></Link></li> 
        <li><Link to="/about" style={styles.link}><div className="hoverr navimg" ><img style={{width:20}} src="public/bxs-user-circle.svg"/></div></Link></li>
        <li><Link to="/portfolio" style={styles.link}><div className="hoverr navimg" ><img style={{width:20}} src="public/bxs-briefcase.svg"/></div></Link></li>
        <li><Link to="/contact" style={styles.link}><div className="hoverr navimg" ><img style={{width:20}} src="public/bxs-envelope.svg"/></div></Link></li>
        {/* <li><Link to="/blog" style={styles.link}><div className="hoverr navimg"  ><img style={{width:20}} src="public/bxs-conversation.svg"/></div></Link></li> */}
      </ul>
    </nav>
    </nav>
  );
}

const styles = {
  navbar: {
    
    position: "fixed",
    margin:"5px",
    right: 0,
    top: 0,
    height: "100vh",
    width: "120px",
    background: "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:"10px",
    borderColor:""
    
  },
  navList: {
    listStyle: "none",
    padding:0,
    textAlign: "center",
  },
  link: {
    padding:10,
     position:"relative",
    // color: "white",
    textDecoration: "none",
    display: "block",    
  },
 
  navimg:{
    
    right: 0,
    top: 0,
    height: "40px",
    width: "40px",
    borderRadius:"100px",
    background: "lightgrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
   },
};

export default Navbar;
