import React from "react";
import profilePic from "./profile.jpg";

function App() {
  return (
    <div className="resume-container">
      <div className="sidebar">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <h1 className="name">
          Calvin Jared <br /> Quiambao
        </h1>

        <div className="section-title full-strip">Contact</div>
        <div className="contact">
          <p><strong>Address</strong><br />Macabebe Pampanga</p>
          <p><strong>Phone</strong><br />09378229736</p>
          <p><strong>E-mail</strong><br />cjmquiambao.student@ua.edu.ph</p>
        </div>

        <div className="section-title full-strip">Skills</div>
        <ul className="skills-list">
          <li>Contributed to a group project, coding and testing a functional prototype using Python</li>
          <li>Assisted peers and faculty with basic technical issues</li>
          <li>Developed and maintained a personal website using HTML and CSS</li>
          <li>Utilized cloud storage platforms like Google Drive</li>
          <li>Designed database schemas</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="section">
          <p>
            Motivated student with a strong foundation in team collaboration, project coordination, and goal-oriented planning. Experienced in leading group assignments, managing multiple responsibilities, improving workflows, maintaining high standards. Recognized for a cooperative mindset and dedication to quality work.
          </p>
        </div>

        <div className="section">
          <hr />
          <h2 className="section-heading">Education</h2>
          <hr />
          <div className="job">
            <span className="job-date"></span>
            <div className="entry">
              <strong>Master of Science in Information Technology</strong>
              <p>University of the Assumption</p>
            </div>
          </div>
          <div className="job">
            <span className="job-date"></span>
            <div className="entry">
              <strong>Bachelor of Science in Information Technology</strong>
              <p>University of the Assumption</p>
            </div>
          </div>
        </div>

        <div className="section">
          <hr />
          <h2 className="section-heading">Experience</h2>
          <hr />
          <div className="job">
            <span className="job-date">2025 – Current</span>
            <div className="entry">
              <strong>Director of Development Operations</strong>
              <p>Google</p>
              <ul>
               <li>Oversee and optimize end-to-end development operations, driving efficiency and strategic alignment across teams.</li>
               <li>Champion Agile and Scrum methodologies, coaching cross-functional teams to adopt and sustain best practices.</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <span className="job-date">2021 – Current</span>
            <div className="entry">
              <strong>Guest Lecturer</strong>
              <p>University Of The Assumption, San Fernando, Province Of Pampanga, Philippines</p>
              <ul>
               <li>Designed and delivered dynamic lectures on specialized topics in technology and software engineering.</li>
               <li>Encouraged student engagement through real-world applications, case studies, and collaborative learning.</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <span className="job-date">2010 – 2016</span>
            <div className="entry">
              <strong>Lead Software Engineer</strong>
              <p>Tesla</p>
              <ul>
                 <li>Served dual roles as Project Manager and Scrum Master, ensuring timely and quality-driven project execution.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        body {
          font-family: 'Century Gothic', sans-serif;
          background: #f0f0f0;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
        }

        .resume-container {
          width: 210mm;
          min-height: 297mm;
          background: white;
          display: flex;
          box-shadow: 0 0 8px rgba(0,0,0,0.2);
          margin: 40px auto;
        }

        @media print {
          @page {
            size: A4;
            margin: 0;
          }
        }

        .sidebar {
          background: #094d73;
          color: white;
          width: 30%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .profile-pic img {
          width: 100%;
          margin-bottom: 15px;
        }

        .name {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .section-title.full-strip {
          background: rgba(0, 0, 0, 0.2);
          font-size: 16px;
          font-weight: bold;
          padding: 10px 10px;
          margin: 20px 20px 30px;
          margin-left: -20px;
          width: 117%;
          box-sizing: border-box;
          text-indent: 10px;
        }

        .contact p {
          margin: 8px 0;
          font-size: 14px;
          word-wrap: break-word;
        }

        .skills-list {
          list-style-type: disc;
          margin-left: 20px;
          font-size: 14px;
          padding-right: 10px;
          overflow-wrap: break-word;
        }

        .skills-list li {
          margin-bottom: 10px;
          word-break: break-word;
        }

        .main-content {
          color: #343434;
          width: 70%;
          padding: 30px;
        }

        .section {
          margin-bottom: 20px;
        }

        .section-heading {
          text-align: left;
          font-size: 18px;
          font-weight: bold;
          color: #094d73;
          margin: 10px 0;
        }

        .section hr {
          border: none;
          border-top: 1px solid #343434;
          margin: 8px 0;
        }

        .entry {
          margin-left: 0;
          margin-bottom: 20px;
        }

        .entry p {
          margin: 0;
          font-size: 14px;
        }

        .entry strong {
          display: block;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 2px;
        }
        
        .job {
          margin-bottom: 20px;
          display: flex;
          align-items: flex-start;
        }

        .job-date {
          font-size: 14px;
          font-weight: normal;
          width: 100px;
          flex-shrink: 0;
          text-align: left;
          margin-right: 20px;
          color: #555;
        }

        .job .entry {
          margin-left: 0;
          margin-bottom: 0;
          flex-grow: 1;
        }

        .job .entry strong {
          font-size: 16px;
          display: block;
          margin-bottom: 2px;
        }

        .job .entry p {
          margin: 0 0 5px 0;
          font-style: italic;
        }

        .job .entry ul {
          margin-left: 20px;
          padding-left: 0;
          list-style-type: disc;
          font-size: 14px;
        }

        .job .entry ul li {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}

export default App;