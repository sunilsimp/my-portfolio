import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sunil Abhre</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 💻",
                    1000,
                    "Flutter Developer 📱",
                    1000,
                    "Front End Developer 🌐 ",
                    1000,
                    "React Developer 🔴",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Passionate About Building Full Stack Applications.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="resume.pdf" download="sunil resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
