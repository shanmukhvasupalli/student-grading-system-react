import React from 'react';
import Navbar from './NavBar';

export default function About() {
  return (
    <div>

      <Navbar />
      <div className="about">
        <h1 align="center">
          <u>Online Assignment and Grading System</u>
        </h1>
        <p>
          The Online Assignment Submission and Grading System is designed as an Internet medium in order to save time
          when communicating with learners and teachers in the learning environment. Such an approach enables learners
          to present the assignments electronically while the educators are able to view, evaluate, and mark them along
          with comments with ease. The system's objective is that fewer manual processes will help more people to
          improve, and cut down on the volumes of paperwork as well as automation of the grades which aids in enhancing
          productivity and improving schooling.
        </p>

        <h2><u>Key Features to be Implemented</u></h2>
        <ul>
          <li>
            <strong><u>Email Notifications:</u></strong>
            <ul>
              <li><strong>Deadline Alerts:</strong> Automatic email reminders to students when assignment deadlines are approaching.</li>
              <li><strong>Submission Confirmation:</strong> Email notification for successful submissions.</li>
              <li><strong>Feedback Notification:</strong> Notify students when grades and feedback are published.</li>
            </ul>
          </li>

          <li>
            <strong><u>Dashboard and Reports:</u></strong>
            <ul>
              <li><strong>Student Dashboard:</strong> View assignments, deadlines, grades, and feedback.</li>
              <li><strong>Admin Dashboard:</strong> Monitor submission statuses, pending reviews, and overall progress.</li>
              <li>
                <strong>Performance Reports:</strong> Generate detailed reports based on student performance for specific
                assignments, overall progress, and grade distribution. Ability to export reports in CSV/PDF format for
                academic review.
              </li>
            </ul>
          </li>

          <li>
            <strong><u>Secure Login and Data Privacy:</u></strong>
            <ul>
              <li><strong>Role-based access control (RBAC)</strong> for students and teachers.</li>
              <li><strong>Secure login mechanisms</strong> with password recovery options.</li>
            </ul>
          </li>
        </ul>

        <h2><u>Team Members</u></h2>
        <ul>
        <a href="https://www.linkedin.com/in/pathiputtoor-harshavardana-reddy-2800bb285/" target='_blank'  ><li>P.Harshavardana Reddy</li></a>
        <a href="https://www.linkedin.com/in/sanjay-kamisetty-137aa7284/" target='_blank' ><li>K.Sanjay</li></a>
        <a href="https://www.linkedin.com/in/shanmukh-vasupalli/" target='_blank' ><li>V.Shanmukh</li></a>
        </ul>

        <h2>Conclusion:</h2>
        <p>
          The Online Assignment Submission and Grading System successfully simplifies everything associated with
          academics and digitizes them for better and effective management of assignments between students and teachers.
          Some of the good features of this system are automated email notifications, feedback tracking, and performance
          reports that make the grading process very smooth.
        </p>
        <br/>
        <p>
          A note of thanks to Mr. Jonnalagadda Surya Kiran Sir, who supported and guided us throughout the development
          phase of this project, which actually helped in the improvement of both technical as well as subject-related
          skills.
        </p>
      </div>
    </div>
  );
}
