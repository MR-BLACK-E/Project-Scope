import { useState } from "react";

const white={background:'white'}
const yellow={background:'yellow'}

function Onhover(){
    const [color,setColor]=useState(white)
    return (
        <div>
          <div onMouseEnter={
            ()=>setColor(yellow)
          }
          style={{color}}><h1>gegeeee</h1></div>  
        </div>
    )
};
export default Onhover;