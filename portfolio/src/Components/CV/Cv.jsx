import React from "react";
import Button from "@mui/material/Button";
import Resume from '../Images/Professional CV Resume (1).pdf'
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a href="" download><Button variant="contained" sx={{margin: '0.2em'}}>Download CV</Button></a>
      <a href=""><Button variant="contained">Let's Talk</Button></a>
    </div>
  );
};

export default Cv;
