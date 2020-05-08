import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../veere/style120.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

AOS.init();
const Veere = () => {
  return (
    <div className="veere" style={{ height: "100vh" }}>
      <div className="ayyo" data-aos="fade-down" data-aos-duration="2000">
        <h1>
          <b>PROTECT YOURSELF & OTHERS</b>
        </h1>
        <h2>SO SPREAD AWARENESS</h2>
        <h2>NOT VIRUS</h2>
        <Button variant="contained" color="secondary" fontSize="large">
          <Link
            to="/Quizz"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            Quizz Time
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Veere;
