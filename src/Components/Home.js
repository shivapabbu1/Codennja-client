import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./Header.css"
import { Link ,Routes,Route } from 'react-router-dom';
import Guided from '../Innerpages/Guided';
import Doubtres from '../Innerpages/Doubtres';
import Codeninja from '../Innerpages/Codeninja';
import Mock from '../Innerpages/Mock';
import Placement from '../Innerpages/Placement';
import Freeresource from '../Innerpages/Freeresource';
import CourseCard from './CourseCard';
import Fotter from './Fotter';
import { FaPen } from 'react-icons/fa';

import course from "../Api"

const Home = (props) => {
  return (
  <>
  <div  class="main">
 

    {/* canavs page */}

    <div id='container' >
   <div class="row  canvas  ">
   
    <div class="col canvaspara  " >

  
      <h1 class="card-text display-4 text-warning" > Be a code ninja</h1> <br/>
     <h3 class="display-5 text-white">50,000 Students from 300 colleges have trusted us</h3> <br/>
     <a class="btn-lg btn-warning" href="#explorenewprogram">EXPOLRE PROGRAMS</a>
    </div>
    <div class="col" >
    <img  class=" float-right canvasimg" src='https://files.codingninjas.in/438375-17407.webp'/>
    </div>

    </div>
    </div> 







    {/* another card */}
    <div class=" mx-auto w-50 h-20 text-white " style={{borderRadius:"20px",backgroundColor:"navy",margin:"0px50px",overflow:"visible"}}>  
      <div >
        <p class="text-center"><h3>If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you.</h3> <br/>
        NO MATTER WHAT IT TAKES! </p>
      </div>
      
      <div class="row w-45 m-2 ">
        <div class="col w-auto">
       <img  style={{width:"5rem"}} src='https://files.codingninjas.in/boxicon1-9659.svg'/>  <br/>
       <span>Content designed by IIT & Stanford alumni</span>
        </div>
        <div class="col w-auto">
        <img style={{width:"5rem"}}src='https://files.codingninjas.in/boxicon2-9658.svg'/>  <br/>
       <span>CInstant 1:1 doubt resolution</span>
        </div>
        <div class="col w-auto">
        <img style={{width:"5rem"}} src="https://files.codingninjas.in/boxicon3-9657.svg"/> <br/>
       <span>Practical learning with 100+ problems & 10+ projects in each course</span>
        </div>
        </div>
        </div>
        
        
         <br/> 

        <h1 class="text-center">14,000+ CODING NINJAS TO INSPIRE YOU</h1>

        {/* inpire crd */}
        <div class="maindiv">
          <div class="members-container">
            <div class="memberdatacard" style={{backgroundColor:"violet"}}>
              <h2 class="card-title">CS novice to Google </h2>                 
            <p class="card-text">
            <p>Despite being from a tier 3 college, I would like to thank my mentors & teachers at Coding Ninjas who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.</p>
              <p class="align-text-bottom">
                        Pareksha Manchanda <br/>
                          Software Engineer <br/>
                          
              <img  style={{width:"5rem",height:"4rem"}} src="https://files.codingninjas.com/google-12193.png"/>
              </p>
              </p> 
              <div class="imagediv-1">
                 </div> 
           </div>


    <div class="memberdatacard" style={{backgroundColor:"lightblue"}}>
        <h2 class="card-title">College dropout to a package of 10 LPA</h2>
  
        <p class="card-text">
          <p class="w-5">Despite being from a tier 3 college, I would like to thank my mentors & teachers at Coding Ninjas who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.</p>
           <p class="float-bottom">
            Harsh Agrawal <br/>
             Software Engineer <br/>
                       <img  style={{width:"5rem",height:"4rem"}} src='https://files.codingninjas.com/avalara-10511.png'/>
            </p>
            </p>
            <div class="imagediv-2" ></div>
             
</div> 

     <div class="memberdatacard" style={{backgroundColor:"orange"}}>
        <h2 class="card-title">Non-CS branch to Top Company </h2>
   
     <p class="card-text"><p class="w-5">
The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.</p>
<p class="float-bottom">
Satwika Bhattacharjee<br/>
Analyst <br/>
<img  style={{width:"5rem",height:"4rem"}} src='https://files.codingninjas.in/goldman-sachs-9763.svg'/>

</p>
</p>
<div class="imagediv-3" ></div>
             
</div> 

<div class="memberdatacard" style={{backgroundColor:"grey"}} >
        <h2 class="card-title">Tier-3 college to 6 stars on CodeChef </h2>
  
<p class="card-text"><p class="w-5">
It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Coding Ninjas for helping a Tier-3 college student explore such opportunities.
</p>
<p class="float-bottom">
 Rahul Lather <br/>
Member of Technical Staff <br/>
<img  style={{width:"5rem",height:"4rem"}} src='https://files.codingninjas.com/cn-logo-12194.png'/>
</p>
</p>
<div class="imagediv-4"></div>
             </div> 


<div class="memberdatacard" style={{backgroundColor:"blue"}}>
<h2 class="card-title">Non Engineer to Investment Bank </h2>
  
<p class="card-text">
  <p class="w-5">Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable. My approach towards solving a problem completely changed.</p>
<p class="float-bottom">
  Richa Sharma <br/>
  SEP Intern <br/>
  <img  style={{width:"5rem",height:"4rem"}} src='https://files.codingninjas.com/jp-morgan-chase-10959.png'/>
</p></p> 
<div class="imagediv-5" ></div>
             </div>
            </div>

</div>
<div class="d-flex justify-content-center button-here  ">
<button class="btn btn-warning "><span class="zen-button-text button-text p-0"> <a href='https://www.codingninjas.com/our-students'>Hear more stories from our alumni </a> </span></button>
</div>




{/* why njoin us card */}

<div   class=" joincard bg-warning" >
  <div class="row ">
    <div class="col d-flex flex-column align-center">
        <header class="" style={{marginTop:"50px"}}>Why Join us ?</header> 
        <h1 class="my-25">Great students deserve the best jobs</h1> <br/>
        <p>Coding Ninjas Makes it Happen...</p>

    </div>
    <div class="col polygon ">
        
<div class="hexa" >
        
     <div class="hex-box text-center" ><div style={{fontSize:"3rem"}} >150+ </div><p style={{width:"150px"}}>Students working in FAANG</p></div>
        
        <div class="hex-box text-center"><div style={{fontSize:"3rem"}} >10 </div><p style={{width:"150px"}}>Students started their own companies</p></div>
</div>

         
<div class="hexa">
        
        <div class="hex-box text-center"><div style={{fontSize:"3rem"}} >50+ </div><p style={{width:"150px"}}>Students having 5 Stars on CodeChef</p></div>
                
                <div class="hex-box text-center"><div style={{fontSize:"3rem"}} >100+ </div><p style={{width:"150px"}}>Students received International Job Offers</p></div>
        </div>
        
</div>

  </div>
</div> <br/> 



     
{/* //rating card */} 

<div class=" w-100 h-auto  mx-30" >
        <h3 class="dispaly-3 text-center m-5">Our Students are placed at</h3>
        <div class="row w-100">
            <div class="col ">
            <img style={{width:"10rem"}} src='https://files.codingninjas.in/google-9542.svg'/>
            </div>
            <div class="col">
             <img style={{width:"10rem"}} src='https://files.codingninjas.in/microsoft-9541.svg'/>
            </div> 
            <div class="col">
            <img  style={{width:"10rem"}} src='https://files.codingninjas.in/adobe-9540.svg'/>
            </div>
            
            <div class="col">
            <img style={{width:"10rem"}} src='https://files.codingninjas.in/walmart-9539.svg'/>
            </div>
            <div class="col">
            <img style={{width:"10rem"}} src='https://files.codingninjas.in/amazon-9538.svg'/>
            </div>
            <div class="col">
                <img style={{width:"10rem"}} src='https://files.codingninjas.in/oyo-9537.svg'/>
            </div>
           </div>
           <div class="row w-100">
            <div class="col ">
            <img style={{width:"10rem"}} src='https://files.codingninjas.in/flipkart-9536.svg'/>
            </div>
            <div class="col">
             <img style={{width:"10rem"}} src='https://files.codingninjas.in/morganstanley-9535.svg'/>
            </div> 
            <div class="col">
            <img  style={{width:"10rem"}} src='https://files.codingninjas.in/samsung-9534.svg'/>
            </div>
            
            <div class="col">
            <img style={{width:"10rem"}} src='https://files.codingninjas.in/expedia-9533.svg'/>
            </div>
            </div>
      <div class="text-center">  <button  class="btn btn-info" >Download report</button></div>
        </div>  <br/>
   


        <div class="  row d-flex flex-row  "  style={{margin:"100px"}}  >
          <div class=" col card rate-card    text-center  text-white " style={{backgroundColor:"navy"}}>
      <h3 class="dispaly-0">4.8</h3>
     <h5 >100+ reviews</h5>
      <h1 class="dispaly-1">FACEBOOK</h1>
    <p class="d-flex justify-content-center text-white">  <ReactStars  count={5} size={24} activeColor="#ffd700"/> </p>
    
 </div>
 <div class=" col card rate-card   text-center text-white" style={{backgroundColor:"navy"}}>
 
     <h3 class="dispaly-0">4.9</h3>
     <h5 >100+ reviews</h5>
      <h1 class="dispaly-1">GOGGLE</h1>
    <p class="d-flex justify-content-center text-white">  <ReactStars  count={5} size={24} activeColor="#ffd700"/> </p>
    
 </div>
 <div class=" col card rate-card   text-center text-white" style={{backgroundColor:"navy"}}>
 
     <h3 class="dispaly-0">50+</h3>
     <h5 >Questions asked  <br/> 5000 answered</h5> <br/>
     <h1 class="dispaly-1">QUORA</h1>
     </div>
      </div>

<div class="inverted ">
<div class=" p-5">
 <header class="text-center">
     <h1> A One Stop Platform</h1>
 <p>Practice and learn till you are perfect</p>
 </header>

<nav class="navbar navbar-expand-lg navbar-light bg-light   " id="explorenewprogram"> 
     <ul class="navbar-nav   ">
       <li class="nav-item "><Link to='/Guide'>Guided</Link></li>
       <li class="nav-item "><Link to="/Doubtres">Doubt Resolution</Link></li>
       <li class="nav-item "><Link to="/codeninjas">Codeing Ninjas</Link></li>
         <li class="nav-item "><Link to="/mockinterview">Mock Interview</Link></li>
          <li class="nav-item "><Link to="/placement">Placement Cell</Link></li>
         <li class="nav-item "><Link to="/freeresource">Free Resource</Link></li>
     </ul>
 </nav>

 

 <Routes>
 <Route  path="/Guide" element={<Guided/>}/>
 <Route  path="/doubtres" element={<Doubtres/>}/>
 <Route  path="/codeninjas" element={<Codeninja/>}/>
 <Route  path="/mockinterview" element={<Mock/>}/>
 <Route  path="/placement" element={<Placement/>}/>
 <Route  path="/freeresource" element={<Freeresource/>}/>
 </Routes>
 </div>
</div>





<div style={{marginLeft:"100px"}} id='coursecard'>
      <div style={{marginLeft:"50px"}}><h1 style={{fontSize:"2rem"}}>Courses specially curated for</h1>
           <div class="d-flex flex-row ">    <div >No work experience</div>

               <div style={{marginLeft:"50px"}}> 
               
               Edit preference <span>    <FaPen/></span></div>
            </div> <br/> <br/>
               <h3>  Recommended courses for students</h3>
               </div>
               <div class="d-flex flex-row ">

               
        <a href='https://www.codingninjas.com/courses/full-stack-web-dev-mern' target='_parent'> <div class=" coursecard">
          <div class="ro " >
               <div class="co">
                Full Stack 
                <br/> MERN Stack
                </div>
                <div class="co " >
                   <img src='https://files.codingninjas.com/mern-11710.svg' alt="logo"/>
                </div>
          </div>
    <div class="ro">
      <div  class="co">
               <img  width="13" height="13" src="https://files.codingninjas.in/vector-1-19336.svg" alt="hour-icon"/>
                140+ Hours 
                </div>
               <div class="co">
                    <img width="13" height="13" src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg" alt="project-icon"/>
                     6+ Projects 
                </div>
    </div>
    <div class="ro">
      <div class="co">
             4.8 <img alt="rating-image"  src="https://files.codingninjas.in/4-8-stars-5588.png" style={{width:"80px"}}/> <span>(2k+ students)</span>
             </div>
             <div class="co">
           
             </div>
    </div>
</div>

</a>
        
<a href='https://www.codingninjas.com/courses/c-plus-plus-data-structures-and-algorithms' target='_parent' > 
<div class=" coursecard">
   
          <div class="ro " >
               <div class="co">
                Data structures <br/> Basic of C &C ++ Programming
                </div>
                <div class="co " >
                   <img src='	https://files.codingninjas.com/c-11714.svg' alt="logo"/>
                </div>
          </div>
    <div class="ro">
      <div  class="co">
               <img  width="13" height="13" src="https://files.codingninjas.in/vector-1-19336.svg" alt="hour-icon"/>
                60+ Hours 
                </div>
               <div class="co">
                    <img width="13" height="13" src="https://files.codingninjas.in/mdi_palette-swatch-19337.svg" alt="project-icon"/>
                     350+ problems 
                </div>
    </div>
    <div class="ro">
      <div class="co">
             4.8 <img alt="rating-image"  src="https://files.codingninjas.in/4-8-stars-5588.png" style={{width:"80px"}}/> <span>(17k+ Students)</span>
             </div>
             <div class="co">
           
             </div>
    </div>
  
     </div>
     </a>
    </div>
          
    </div>








<br/><br/><br/>


   




<br/><br/>


{/* news and events card */}
<div class="lastcard">
        <div class=" Querycard" >

        <div class="row   ">
            <div class="col ">
               <section class="d-flex justify-content-center" >
                <div>
                <h1 style={{fontSize:"1.2m"}}>Have any Quries ?</h1> <br/>
                <p>Get supoort from our experts</p> 
                 <div class="row "  >
                 <div class="col ">
                  <img style={{width:"50px"}} src="	https://files.codingninjas.in/call-icon-9597.svg" alt='logo-phone'/>
                 </div>
                 <div class="col"  >
                   <p > Call us on our toll free number <br/>
                    1800-123-3598        </p>
                  </div>
                 </div>
                 </div>
              </section>
            </div>
            <div class="col">
              <div class="card  formcard  bg-light">
            <form class=" m-10 ">
	  <div class="form-group input-group">

     <input   type="number" name="" class="form-control " placeholder="Contact Number *" />
    </div>
    <div class="form-group input-group">
    	
        <input name="" class="form-control" placeholder="Email address *" type="email"/>
    </div> 
    <div class="form-group input-group">
    
	
    	<input name="" class="form-control" placeholder="Full Name *" type="text"/>
    </div> 
    <div class="form-group input-group">
    	
        <input name="" class="form-control" placeholder="Gradutaion Year *" type="Number"/>
    </div> 
  <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Request CallBack  </button>
    </div> 
    </form>
</div>
</div>
  </div>
 </div>

    <div class=" newscard">
    <h1>Codeing Ninjas in News</h1> <br/> <br/>
        <div class="row ">
          <div class="col-3">
          <Link to="https://www.businessworld.in/article/Platforms-to-watch-out-for-if-you-want-to-learn-coding/06-10-2020-328480/">  <div> <img style={{width:"200px", height:"100px"}} src='https://files.codingninjas.in/bw-logo-5471.jpg' alt='logo'/></div></Link>
      <p>Platrofrm to watch our storeis</p>
          </div>
          <div class="col-3">
          <div><img style={{width:"200px", height:"100px"}} src='https://files.codingninjas.in/india-today-5474.jpg' alt='logo'/></div>
            <p>Why learn Programming ?</p>
          </div>
          <div class="col-3">
      <div>    <img style={{width:"200px", height:"100px"}} src='	https://files.codingninjas.in/et-brandequity-5439.jpg'alt='logo'/></div>
           <p>Codeing Ninjas aim for  codeing curiosty among Students </p>
          </div>

        </div>
        <div class="row">
        <div class="col-3">
        <img style={{width:"200px", height:"100px"}} src='https://files.codingninjas.in/et-logo-5689.png' alt='logo'/>
          <p>Coding Ninjas Collaborates With Chitkara University To Offer Programming Courses To First Year B Tech Students</p>
   
          </div>
          <div class="col-3">
          <img style={{width:"200px", height:"100px"}} src='https://files.codingninjas.in/inc-42-5477.jpg' alt='logo'/>
           <p>Coding Ninjas Turns Past Learners Into Teachers To Challenge BYJU’S-Owned WhiteHat Jr</p>
    
          </div>
          <div class="col-3">
          <img style={{width:"200px", height:"100px"}} src='	https://files.codingninjas.in/0000000000004338.png'alt='logo'/> 
      <p>CODING NINJAS AIMS TO CRACK THE EDTECH CODE BY RESKILLING AND UPSKILLING COLLEGE STUDENTS</p>


          </div>
        </div>
        <div class="row">
        <div class="col">
        <img style={{width:"200px", height:"100px"}} src='https://files.codingninjas.in/bllogo-5440.jpg' alt='logo'/>
      <p>Coding-enabled world and workforce</p>
                </div>
                <div class="col">
             <img style={{width:"200px", height:"100px"}} src='https://files.codingninjas.in/the-hindu-5475.webp' alt='logo'/>
           <p>Ed-tech start-up Coding Ninjas to offer coding, programming courses for students</p>
             </div>
                <div class="col">

             </div>
             
             
          </div>

          </div>
          </div>
  
          </div>
   
      <Fotter/>
    
   
       </>
  )
}

export default Home