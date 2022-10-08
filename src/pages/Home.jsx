import React from "react";
import Button from "../components/button";
import Imagediv from "../components/imagediv";
import Logo from "../components/logo";




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
    </div>
  );
}

const style = {
  title: {
    fontFamily: "Nike Futura",
    textTransform: "uppercase",
    fontSize: "72px",
    lineHeight: "60px",
    textAlign: "center",
    margin: "0 auto",
  },
    subtitle: {
    fontFamily: "Arial",
    textAlign: "center",
    marginTop: "2rem",
    text: "justify"
  },
    btn: {
      
      marginTop: "2rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",   
      alignItems: "center",
      
  },
    title2: {
      fontFamily: "Arial",
      fontSize: "24px",
      textHeight: "30px",
      fontWeight: "100",
      textAlign: "left",
      margin: "8px auto",

    },
    images: {
      marginTop: "2rem",
      display: "flex",
      flexDirection: "row",
      justifyItems: "center",
      alignItems: "center",
      gap: "15%",
      flex: "grow"
    },
    logo: {
      
    }



    


};

export default Home;
