
import { Route,Link } from 'react-router-dom';
import './App.css';


import { Routes } from 'react-router-dom';
import Courses from './PageRoute/Courses';
import Scholarship from "./PageRoute/Scholarship"
import Community from "./PageRoute/Community"
import Practice from "./PageRoute/Practice"
import Careercamp from "./PageRoute/CareerCamp"
import Login from './PageRoute/Login';
import Enroll from "./PageRoute/Enroll"
import Home from './Components/Home';
import Component from './Components/Component';
import Header from './Components/Header';
import Signup from './PageRoute/Signup';
import CourseCard from './Components/CourseCard';
import Fotter from './Components/Fotter';
import Singlepage from './PageRoute/Singlepage';

function App() {
  return (
   <>
    <Routes>
    {/* MAIN NAVBAR  ROUTEING*/}

    <Route path='/courses' element={<Courses/>}/>
    <Route path='/scholarship' element={<Scholarship/>}/>
    <Route path='/community' element={<Community/>}/>
    <Route path='/practice' element={<Practice/>}/>
    <Route path='/careercamp' element={<Careercamp/>}/>
    <Route path='/login' element={<Login/>}/>
    
    <Route path='/enroll' element={<Enroll/>}/>

    <Route path='/Signup' element={<Signup/>}/>
   
</Routes>
 
<Header/>
   <Home/> 
   
{/* <Component/> */}
{/* <CourseCard/>
  */}


 
 

    
 </>
  );
}

export default App;
