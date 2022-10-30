import React, { useEffect } from "react";
// import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AOS from "aos";
import "aos/dist/aos.css";
// import { SiHashnode } from "react-icons/si";

function Twit() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="container flex justify_between items_center">
      <div className=" projects" id="projects">
        <h2 className="heading">Twittes</h2>
        <div className="flex justify_between flex_wrap">
         <div className="card">
          
         </div>
        </div>
      </div>
    </section>
  );
}

export default Twit;
