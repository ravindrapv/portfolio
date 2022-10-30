import React, { useEffect } from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiHashnode } from "react-icons/si";

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container flex justify_between items_center projects">
      <div className=" projects" id="projects">
        <h2 className="heading">articles</h2>
        <div className="flex justify_between flex_wrap">
          <article className="flex_28 bg" data-aos="fade-up">
            <h3 className="app_name">Functional vs class</h3>
            <p>
              a component represents the part of the user interface components
              are reusable and can be used anywhere in the user interface
            </p>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/functional-and-class-components-in-react"
                    target="blank"
                  >
                    <SiHashnode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/functional-and-class-components-in-react"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28 bg" data-aos="fade-up">
            <h3 className="app_name">Javacript promises</h3>
            <p>
              Promises are used to handle asynchronous operations in JavaScript.
              They are easy to manage when dealing with multiple asynchronous
              operations .
            </p>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/javacript-promises"
                    target="blank"
                  >
                    <SiHashnode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/javacript-promises"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28 bg" data-aos="fade-up">
            <h3 className="app_name">JavaScript Closures</h3>
            <p>
              You need to know how the lexical scoping works first to understand
              the closures. a function along with its lexical scope bundle
              together to form a closure
            </p>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/javascript-closures"
                    target="blank"
                  >
                    <SiHashnode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/javascript-closures"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>

          <article className="flex_28 bg2" data-aos="fade-up">
            <h3 className="app_name">Array Methods in JavaScript</h3>
            <p>
              Image result for array methods in javascript Array methods are
              functions built-in to JavaScript that we can apply to our arrays —
              Each method has a unique function that performs a change
            </p>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/array-methods-in-javascript"
                    target="blank"
                  >
                    <SiHashnode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/array-methods-in-javascript"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>
          <article className="flex_28 bg2" data-aos="fade-up">
            <h3 className="app_name">JavaScript String Methods</h3>
            <p>
              JavaScript String Methods · JavaScript String Length · Extracting
              String Parts · JavaScript String slice() · Note · JavaScript
              String substring() · JavaScript String
            </p>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/javascript-string-methods"
                    target="blank"
                  >
                    <SiHashnode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/javascript-string-methods"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>
          <article className="flex_28 bg2" data-aos="fade-up">
            <h3 className="app_name">JavaScript objects</h3>
            <p>
              In JavaScript, an object is an unordered collection of key-value
              pairs. Each key-value pair is called a property.
            </p>
            <nav className="flex justify_center items_center">
              <ul className="flex_15 flex justify_between git_hub_link">
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/introduction-to-the-javascript-objects"
                    target="blank"
                  >
                    <SiHashnode />
                  </a>
                </li>
                <li>
                  <a
                    href="https://ravindrapv.hashnode.dev/introduction-to-the-javascript-objects"
                    target="blank"
                  >
                    <OpenInNewRoundedIcon />
                    {/* <i className="fab fa-creative-commons-share"></i> */}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="article_underline"></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
