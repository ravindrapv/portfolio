import React from "react";
// import Contact from "./Footer";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Education() {
  return (
    <section className="container education">
      <h2 className="heading" id="education">
        Education
      </h2>
      <div className="flex justify_center items_start column">
        <article className="flex_42 degree_received">
          <h3 className="sub_heading">Degree Received</h3>
          <div className="">
            <img
              data-aos="flip-left"
              className="education_img"
              src="/images/yogi.png"
              alt=""
            />

            <div>
              <h4 className="clg_name"> Tumkur University Tumkur</h4>
              <h5 className="course_name">
                {" "}
                Bachelor's Degree in Computer Application.
              </h5>
              <p>
                I have studied Bachelor's Degree in Computer Application Web
                Developer, Software Developer,{" "}
              </p>
              <a className="website" href="http://tumkuruniversity.ac.in">
                Website
              </a>
            </div>
          </div>
        </article>

        <article className="contact flex_42" id="contact">
          <h2 className="sub_heading">Contact</h2>
          <article>
            <div className="flex items_center justify_center">
              <img
                data-aos="flip-right"
                className="profile"
                src="/images/profile.jpg"
                alt=""
              />
              <nav className="flex justify_center">
                <ul className="flex_15  justify_between icons">
                  <li>
                    <a
                      className="git_linc_twitt"
                      href="https://github.com/ravindrapv"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      className="git_linc_twitt"
                      href="https://www.linkedin.com/in/venkata-ravindra-pv-06aa62217/"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      className="git_linc_twitt"
                      href="https://twitter.com/ravindrapv5"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className=" flex">
              <div className="mail_resume flex justify_center flex_30">
                <Button className="em_re_btn" variant="outlined" size="small">
                  <a href="https://venkataravindrapv@gmail.com">Email</a>
                </Button>

                <Button className="em_re_btn" variant="outlined" size="small">
                  <CloudDownloadIcon />
                  <a href="/Document/Venkat_MERN.pdf" download>
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
}

export default Education;
