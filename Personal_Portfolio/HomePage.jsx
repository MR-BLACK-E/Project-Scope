import DarkTheme from './DarkTheme';
import './Portfolio.css';
function Home() {
    return (
      <div className='height'>
        <div className='wrapper '>
          <div className="profile">
            <img className='homeimg' src="public/MYPIC.jpg"/>
          </div>
          <div className="intro">
            <h2 className='home_h2'>I'M EMIL MATHEW</h2>
            <h2 className='home_h2' style={{ color:"rgba(131, 129, 129, 0.98)"}}>WEB DESIGNER</h2>
            <p className='home_p'>I'm a web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.

</p>
          </div>
        </div>

      </div>
    )
  }
  
  const styles = { textAlign: "center", marginTop: "50px" };
  
  export default Home;
  