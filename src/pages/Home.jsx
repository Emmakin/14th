import React from "react";
import Styles from "../styles/home.module.css"
import Button from "../components/nikeButton/button";
import Imagediv from "../components/bigCard/bigCard";
import Pic1 from "../nike asset/nike-just-do-it2.jpg";
import Pic2 from "../nike asset/nike-just-do-it3.jpg";
import Logo from "../components/logo";
import Subtitlebar from "../components/subtitlebars";
import { SmallCard } from "../components/smallCard/smallCard";
import Small1 from "../nike asset/air-jordan-1-low-mens-shoes-kT68wc.png"
import Small2 from "../nike asset/dunk-low-womens-shoes-7K2zPb.png"
import Small3 from "../nike asset/dunk-high-retro-mens-shoe-dTVTCk.png"
import Small4 from "../nike asset/air-more-uptempo-big-kids-shoes-XXS2f0.png"
import Small5 from "../nike asset/air-max-95-mens-shoes-4Nzc1w.png"
import Small6 from "../nike asset/air-jordan-1-mid-shoes-PCCmCV.png"






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
          alt = "Tennis RockStar"        
          text = "Set Up Workout"
          button = "Shop"
        />
        <Imagediv 
          src={Pic2}
          alt = "Nike closeup picture"
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
      <section className={Styles.smallCard}>
        <SmallCard 
          src = {Small1}
          alt = "shoe"
          brandName = "SNKRS Exclusive"
          productName = "Air Jordan 3"
          productType = "Mens Shoe"
          productPrice = "$210"
        />
         <SmallCard 
          src = {Small2}
          alt = "shoe"
          brandName = "SNKRS Exclusive"
          productName = "Air Jordan 3"
          productType = "Mens Shoe"
          productPrice = "$210"
        />
         <SmallCard 
          src = {Small3}
          alt = "shoe"
          brandName = "SNKRS Exclusive"
          productName = "Air Jordan 3"
          productType = "Mens Shoe"
          productPrice = "$210"
        />
         <SmallCard 
          src = {Small4}
          alt = "shoe"
          brandName = "SNKRS Exclusive"
          productName = "Air Jordan 3"
          productType = "Mens Shoe"
          productPrice = "$210"
        />
         <SmallCard 
          src = {Small5}
          alt = "shoe"
          brandName = "SNKRS Exclusive"
          productName = "Air Jordan 3"
          productType = "Mens Shoe"
          productPrice = "$210"
        />
         <SmallCard 
          src = {Small6}
          alt = "shoe"
          brandName = "SNKRS Exclusive"
          productName = "Air Jordan 3"
          productType = "Mens Shoe"
          productPrice = "$210"
        />
      </section>
    </div>
  );
}




    



export default Home;
