import React from 'react'
import "./Home.css"
import ReactStars from "react-rating-stars-component";
const CourseCard = () => {
  return (
   <>
   <div class="card">
    <div class="card-header">
            <div class="row">
                <div class="col">
                Full Stack
                    MERN Stack
                </div>
                <div class="col " >
                   <img src='https://files.codingninjas.com/mern-11710.svg' alt="logo"/>
                </div>

            </div>


    </div>

   
    
  
        <div  class="row "style={{paddingle:"30px"}}>
               <div  class="col">
               <img  width="13" height="13" src="https://files.codingninjas.in/vector-1-19336.svg" alt="hour-icon"/>
                140+ Hours 
                </div>
                   <div class="col">
                    <img width="13" height="13" src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg" alt="project-icon"/>
                     6+ Projects 
                     </div>
                     </div>
                    <div  class =" row">
                        <div class="rating-points m-0 mr-4"> 4.8 </div></div></div>






                        
       


   </>
  )
}

export default CourseCard