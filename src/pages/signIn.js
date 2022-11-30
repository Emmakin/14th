import React from 'react'
import Blkbutton from '../components/nikeButton/blackbutton'
import Styles from '../styles/signin.module.css'


 const SignIn = () => {
  return (
    <form className={Styles.signIn}>
      <h1>Enter your email to join us or sign in</h1>
      <label>Nigeria</label>
      <input type="mail" name="mail"></input>
      <label>By continuing, I agree to Nike's <a> Privacy Policy </a>
      and Terms of Use.</label>
      <Blkbutton 
        name= "Continue"
      />

    </form>
  )
}
 export default SignIn
