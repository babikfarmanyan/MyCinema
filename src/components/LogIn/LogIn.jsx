import React from 'react'
import {useRef, useState,useEffect} from 'react';
import "./LogIn.css";


const LogIn = () => {

const userRef= useRef();
const errRef = useRef();

const [user, setUser] = useState('');
const [pwd, setPwd] = useState('');
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);


useEffect(()=> {
    userRef.current.focus();
},[])
useEffect(()=> {
    setErrMsg('');
},[user,pwd])



  return (  
  <div className="user">
    <div className="user__content">
            <div className="user__buttons">
                <button className="log-in__button">Log In</button>
                <button className="resgistratuin__button">Registration</button>
            </div>
        <div className="user__box">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form className="user__log-in">
                        <input type="text"
                        id="username"
                        placeholder="User name"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e)=>
                        setUser(e.target.value)}
                        value={user}
                        required
                        />
                        <input type="password"
                        id="password"
                        placeholder="User name"
                        ref={userRef}
                        onChange={(e)=>
                        setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                        <input type="submit" value="Log In"></input>
                    </form>
                   
                </div>
        </div>
</div>

  )
}

export default LogIn