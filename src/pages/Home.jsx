import React from "react";
import Button from "../button";
import Imagediv from "../imagediv";

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
      <div style={style.btnDiv}>
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
      <div>
        <Imagediv />
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
    btnDiv: {
      flex: "display",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"   
  },
    title2: {
      fontFamily: "Arial",
      fontSize: "24px",
      textAlign: "left",
      margin: "6px auto",

    }


    


};

export default Home;
