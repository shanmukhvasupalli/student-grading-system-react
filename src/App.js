import React from 'react';
import Navbar from "./components/NavBar";
import Hero from './components/Hero';
import Login from './components/Login';
import AdminNavBar from './components/AdminNavBar';
import AdminHero from './components/AdminHero';
import ViewCourses from './components/ViewCourses';
import AdminGrading from './components/AdminGrading';
import AddSubmission from './components/AddSubmission';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import AdminLoginPage from './components/AdminLoginPage';
import StudentHome from './components/StudentHome';
import StudentViewCourses from './components/StudentViewCourses';
import AdminAddSubmission from './components/AdminAddSubmission';
import ManageSubmission from './components/ManageSubmission';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/home' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/adminlogin' element={<AdminLoginPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/adminhome' element={<AdminHero/>} />
          <Route path='/admingrading' element={<AdminGrading/>} />
          <Route path='/addsubmisson' element={<AddSubmission/>} />
          <Route path='/viewcourses' element={<ViewCourses/>} />
          <Route path='/studenthome' element={<StudentHome/>} />
          <Route path='/studentviewcourse' element={<StudentViewCourses/>}/>
          <Route path="/adminaddsubmission" element={<AdminAddSubmission/>} />
          <Route path='/managesubmission' element={<ManageSubmission/>} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Login/> */}
      {/* <AdminNavBar/> */}
      {/* <AdminHero/> */}
      {/* <ViewCourses/> */}
      {/* <AdminGrading/> */}
      {/* <AddSubmission/> */}
    </div>
  );
}

export default App;
