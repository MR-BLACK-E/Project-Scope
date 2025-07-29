import MySkill from './MySkill';
import './Portfolio.css';


function Blog() {

    return(
  <div className='height'>
   <div style={{height:200}}>
       <ul  style={styles}  >
    <li><h2 className='h1'>POSTS</h2></li>
    <li><h2 className='h2'>MY <span style={{color:'rgb(255, 174, 0)'}}> BLOG</span></h2></li>
  </ul>
      </div>

      <section>
        <MySkill/>
      </section>
    </div>
  )
  }
  
  const styles = {  marginTop: "10px" ,};
  
  export default Blog;
  