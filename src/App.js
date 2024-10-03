import React from 'react';
import Navbar from "./components/NavBar";
import Hero from './components/Hero';
import Login from './components/Login';
import AdminNavBar from './components/AdminNavBar';
import AdminHero from './components/AdminHero';
import ViewCourses from './components/ViewCourses';
import AdminGrading from './components/AdminGrading';
import AddSubmission from './components/AddSubmission';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Login/> */}
      <AdminNavBar/>
      {/* <AdminHero/> */}
      {/* <ViewCourses/> */}
      {/* <AdminGrading/> */}
      <AddSubmission/>
    </div>
  );
}

export default App;
