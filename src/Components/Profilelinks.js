import React from "react";
import { FaTwitter} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Profilelinks() {
  return (
    <div>
      <div className="flex items_center justify_center profile_links">
        <nav className="flex_22 flex">
          <ul className="">
            <li>
              <a href="https://github.com/ravindrapv">
              <FaGithub/>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/venkata-ravindra-pv-06aa62217/">
              <FaLinkedin/>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/ravindrapv5">
              <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Profilelinks;
