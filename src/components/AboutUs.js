import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/", { replace: true }); //you can use numbers in parantheses => navigate(-1) , jump to previos pag
  };

  return (
    <div>
      <h1>AboutUs</h1>
      <button onClick={clickHandler}>Home</button>
    </div>
  );
};

export default AboutUs;
