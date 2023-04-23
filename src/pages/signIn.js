import React from 'react'
import Styles from '../styles/signin.module.css'


 const SignIn = () => {
  return (
    <form className={Styles.signIn}>
      <h1>Enter your email to join us or sign in</h1>
      <label>Nigeria</label>
      <input type="mail" placeholder="Email" name="mail"></input>
      <label>By continuing, I agree to Nike's <a href='https://agreementservice.svs.nike.com/rest'> Privacy Policy </a>
      and Terms of Use.</label>
      <input className={Styles.inputBtn} type="Submit" />

    </form>
  )
}
 export default SignIn
