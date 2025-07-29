// import React from 'react';
// import './MySkill.css'

// function MySkill() {
//   return (
//     <div>
//       <div className='container-fluid py-5'>
//         <div className="container1 container py-5">
//             <h3 className='h3'>MY SKILLS</h3>
//             <div className='row'>
//           <div className="radial-bars col-lg-6">
            
          
//             <div style={{marginBottom:50}} className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-1' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>89%</div>
//                     <div className='text'>HTML</div>
//             </div>
//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-2' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>90%</div>
//                     <div className='text'>CSS</div>
//             </div>
//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-3' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>68%</div>
//                     <div className='text'>JavaScript</div>
//             </div>
//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-4' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>85%</div>
//                     <div className='text'>Python</div>
//             </div>
//           </div>
//           <div className="radial-bars col-lg-6">

//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-1' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>66%</div>
//                     <div className='text'>React</div>
//             </div>
//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-2' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>86%</div>
//                     <div className='text'>SQL</div>
//             </div>
//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-3' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>0%</div>
//                     <div className='text'>Django</div>
//             </div>
//             <div className="radial-bar">
//                 <svg x="0px" y="0px" viewBox='0 0 200 200'>
//                     <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
//                     <circle className='path path-4' cx="100" cy="100" r="80"></circle>
//                     </svg>    
//                     <div className='percentage'>45%</div>
//                     <div className='text'>C++</div>
//             </div>
           
//           </div> 
//         </div>  
//         </div>
//       </div>  
//     </div>
//   )
// }

// export default MySkill

import React from 'react';
import { skills } from '../../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
    {skills.map(({title, percentage}, index) => {
                    return (
                        <div className="progress__box"key={index} >
                            <div className="progress__circle">
                              <CircularProgressbar strokeWidth={7.5} 
                              text={`${percentage}%`}
                              value={percentage}/>
                            </div>

                            <h3 className="skills__title">{title}</h3>
                        </div>
                    );
                })}
    </>
  )
}

export default Skills