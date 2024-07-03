import React from "react";
// import noteContext from "../context/notes/noteContext";

const About = () => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              iNotebook
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              iNotebook is an innovative cloud-based platform designed to
              revolutionize the way you store and manage your notes. With
              iNotebook, users can securely save their notes online, ensuring
              they are accessible from anywhere at any time. <br />
              Each user enjoys a personalized experience with user-specific
              notes, allowing for organized and efficient note-taking. Whether
              for personal use, study, or work, iNotebook provides a seamless,
              user-friendly interface to keep your thoughts, ideas, and
              important information at your fingertips, all protected with
              robust security measures to keep your data safe.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Author/Developer
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              I am Atin Khemka, a dedicated and innovative Computer Science and
              Engineering student at Guru Gobind Singh Indraprastha University.
              As a proactive learner and problem-solver, I have gained hands-on
              experience through roles such as Teaching Assistant at Coding
              Ninjas and Campus Ambassador at devtown. My technical expertise
              spans across programming languages like C++, Python, and
              JavaScript, and I am proficient in front-end and full-stack web
              development. <br />
              In addition to my technical skills, I have actively contributed to
              my community as a member of Codechef MAIT, organizing
              inter-college activities and managing social media accounts. I
              have also coordinated events like HackWithMAIT2.0, working closely
              with professors to ensure smooth execution. <br />I am passionate
              about leveraging technology to create impactful solutions and am
              always eager to learn and grow in dynamic environments. With a
              solid foundation in data structures, algorithms, and
              object-oriented programming, I am prepared to take on new
              challenges and contribute effectively to any organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
