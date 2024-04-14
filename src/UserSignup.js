import React from 'react'
import {Link} from "react-router-dom";
import "./CSS/UserSignup.css"

const UserSignup = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [dob, setDOB] = React.useState("");
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
          <form onSubmit={handleSubmit}>
            <p>Welcome User , Your Sign up page is here</p>
            <label htmlFor="username">Name:</label>
            <input
              id="username"
              placeholder="Enter your name"
              required={true}
              autoComplete="off"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="date">Date of Birth :</label>
            <input
              type="date"
              id="dob"
              placeholder="Enter your birth date"
              required={true}
              autoComplete="off"
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your E-mail"
              required={true}
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
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

         <button type="submit">Submit</button>
         <p style={{fontSize:"1.04vw"}}>Already have an account!<Link to="/" style={{textDecoration:"none",color:" #808cad"}}> Login</Link></p>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default UserSignup