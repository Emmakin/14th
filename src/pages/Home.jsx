import React from "react";
import Styles from "../styles/home.module.css"
import Button from "../components/nikeButton/button";
import Imagediv from "../components/bigCard/bigCard";
import Pic1 from "../nike asset/nike-just-do-it.jpg";
import Pic2 from "../nike asset/nike-just-do-it2.jpg";
import Logo from "../components/logo";
import Subtitlebar from "../components/subtitlebars";






// planning to make a neat code and create 1tcss module for all the code
 // create new folder for each components that will create each files
 
function Home() {
  return (
    <div className={Styles.wrapper}>
      <h1 className={Styles.title}>
        Introducing <br />
        Nike Forward
      </h1>
      <div className={Styles.subtitle}>
        Made with an average 75% less carbon when compare to our traditional <br />
        knee fleece. Drapes, feel and wears like nothing you have experience before.
      </div>
      <div className={Styles.btn}>
        <Button 
          name = "Shop All Fleece"
        />
        <Button
        name = "Explore Nike Fleece"
        />
      </div>
      <h2 className={Styles.title2}>
        For Your Workout
      </h2>
      <div className={Styles.images}>
        <Imagediv 
          src={Pic1}
          alt = "A basketball jersey"        
          text = "Set Up Workout"
          button = "Shop"
        />
        <Imagediv 
          src={Pic2}
          text = "The Right Gear to Start Running"
          button = "Shop"
        />
      </div>
      <div className={Styles.logo}>
        <Logo />
      </div>
      <div>
        <Subtitlebar />
      </div>
    </div>
  );
}




    



export default Home;
