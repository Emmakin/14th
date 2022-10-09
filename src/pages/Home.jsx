import React from "react";
import Styles from "../pages/home.modules.css"
import Button from "../components/nikeButton/button";
import Imagediv from "../components/bigCard/bigCard";
import Logo from "../components/logo";
import Subtitlebar from "../components/subtitlebars";



// planning to make a neat code and create css module for all the code
 // create new folder for each components that will create each files
 
function Home() {
  return (
    <div>
      <h1 style={style.title}>
        Introducing <br />
        Nike Forward
      </h1>
      <div style={style.subtitle}>
        Made with an average 75% less carbon when compare to our traditional <br />
        knee fleece. Drapes, feel and wears like nothing you have experience before.
      </div>
      <div style={style.btn}>
        <Button 
          name = "Shop All Fleece"
        />
        <Button
        name = "Explore Nike Fleece"
        />
      </div>
      <h2 style={style.title2}>
        For Your Workout
      </h2>
      <div style={style.images}>
        <Imagediv 
        
          text = "Set Up Workout"
          button = "Shop"
        />
        <Imagediv 
          
          text = "The Right Gear to Start Running"
          button = "Shop"
        />
      </div>
      <div style={style.logo}>
        <Logo />
      </div>
      <div>
        <Subtitlebar />
      </div>
    </div>
  );
}




    


};

export default Home;
