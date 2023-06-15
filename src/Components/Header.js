import React from 'react'
import  "./Header.css"
import {NavLink,Link} from "react-router-dom"

const Header = () => {
  return (
 <> 
 <div class="menu">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" >

     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-around " id="navbarNavDropdown" >
  <ul class=" navbar-nav margin ">
  <li class="nav-item">  <img  src='https://files.codingninjas.in/logo_variants-white-25005.png'  class="codeninjalogo" alt='mylogo'/></li>
  <li class="nav-item ">
  <Link to='/courses' class="nav-link text-white text-center dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" >
       Courses
  </Link>
        <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
       <div>
       <h4 class="ml-5 mt-5 "><b>What is your work experience?</b></h4> 
       <h6 class="ml-5">  This will help us recommend the best programs for you</h6>
       </div>
       <div class="row " style={{width: "50rem",height:"30rem"}}>
      <div class="col  ">
    <div class="card w-80 h-80 m-5  ">
    <img class="card-img-top img-responsive w-50 h-50 mx-auto d-block " src="https://files.codingninjas.com/student-24426.png" alt="Card image cap"/>
      <div class="card-body">
      <h4 class="p-2">No Work<br></br> experience <i class="fa fa-chevron-right float-right" aria-hidden="true"></i></h4>
        <p class="card-text p-2">Designed as per college <br/> student schedule</p>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-80 h-80 m-5 " >
    <img class="card-img-top img-responsive w-50 h-50  mx-auto d-block " src="https://files.codingninjas.com/professional-24427.png" alt="Card image cap"/>
      <div class="card-body">
          <h4 class="p-2">Having Work <br></br>experience <i class="fa fa-chevron-right float-right" aria-hidden="true"></i></h4>
        <p class="card-text p-2">Designed as per working professinal schedule</p>
       
      </div>
    </div>
  </div>
</div>
        </div>
      
       
</li>
      <li class="nav-item ">
        <Link to='/scholarship' class="nav-link text-white" >Scholarship  <span class="btn-sm btn-warning">upto100%off</span></Link>
      </li>
      <li class="nav-item dropdown ">
        <Link to='/community' class="nav-link text-white dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" >
          Community
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Events &raquo;</a>
          <ul class="dropdown-menu dropdown-submenu">
        <li>
          <a class="dropdown-item" href="#">Submenu item 1</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 2</a>
        </li>
        </ul>
          <a class="dropdown-item" href="#">Sponsorship & Collaborations</a>
          <a class="dropdown-item" href="#">Campus Ambassador Program</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <Link to='/practice' class="nav-link text-white dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" >
          Practice
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <header class="ml-3"><u >Coding Ninjas Studio</u></header> <br/>
          <a class="dropdown-item" href="#">Contests <span class="btn-sm btn-primary ">NEW</span></a>
          <a class="dropdown-item" href="#">Guided paths</a>
          <a class="dropdown-item" href="#">Code problems</a>
          <a class="dropdown-item" href="#">Interview experince</a>
          <a class="dropdown-item" href="#">Mock tets</a>

        </div>
      </li>
      <li class="nav-item  ">
        <Link to='/careercamp' class="nav-link text-white" ><div> <img src='https://files.codingninjas.in/careercamp-12614.svg' alt='logo'/><span class="btn-sm btn-primary">NEW</span>  <br/></div> </Link>
      </li>

      <li class="nav-item ">
        <Link  to='/login ' class="nav-link text-white button-1 " data-toggle="modal" data-target="#LoginModal">
         Login
        </Link>
      </li>
     
      <li class="nav-item ">
        <a href="#coursecard" class="nav-link text-white  button-2">ENROLL  </a>
      </li>
    </ul>
  </div>
</nav>
</div>
 </>
  )
}

export default Header










