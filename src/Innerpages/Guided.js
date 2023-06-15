import React from 'react'

const Guided = (props) => {
  return (
    <>
     <div >
        <div class="row "> 
        <div class="col w-50" >
          <p class="text-warning">Well Guided Program</p>
          <h1>We have invented and perfected the best system to learn coding</h1>
          <div>
          <p>Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.</p>
            <ul>
           <li> Very short learning videos: 10-15 minutes</li>

            <li>2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes</li>

          <li>Doubts resolved instantly by our Teaching Assitants and Notes for Revision</li>
            </ul>
          <div class="row w-40">
            <div class="col w-10">
         <h1>100+</h1>
        <p>average hours of learning per course</p>
            </div>
            <div class="col w-10">
              <h1>50+</h1>
             <p>practice problems in each course</p>
           </div>
            <div class="col w-10">
           <h1>10+</h1>
            <p>projects per course</p>
              </div>
              </div>
          </div>
        </div>
        <div class="col w-50">
       
        <img  class="rounded-circle" style={{width:"30rem",height:"40rem"}} src="https://files.codingninjas.in/pl1-9663.png" alt='image of guided'/>
   
        </div>

        </div>

     </div>


    
    </>
   
  )
}

export default Guided