import React from 'react'
import {Link} from "react-router-dom";
import "./CSS/UserSignup.css"

const UserLogin = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = async (e) => {
        try {
        
        } catch (err) {
          console.log(err);
          setError(err.response.data.error);
        }
      };

  return (
    <>
     <div className="main-sign-up">

        
<div className="sign-up-form">
<div className="error">
  {error}
</div>
  <form onSubmit={handleSubmit} style={{paddingBottom:"7%",marginBottom:"38%"}}>
    <p>Login to your account</p>
    <label htmlFor="username">Username:</label>
    <input
      id="username"
      placeholder="Enter your name"
      required={true}
      autoComplete="off"
      onChange={(e) => {
        setUsername(e.target.value);
      }}
    />
   
    <label htmlFor="password">Password :</label>
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      autoComplete="off"
      required={true}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
    

 <button type="submit">Login</button>

 <p style={{fontSize:"1.04vw"}}>Don't have an account? <Link to="/signin" style={{textDecoration:"none",color:" #808cad"}}>Sign up now!</Link></p>
  </form>
</div>
</div>
    </>
  )
}

export default UserLogin