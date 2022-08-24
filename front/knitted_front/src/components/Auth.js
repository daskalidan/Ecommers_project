import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doSigninAsync, logout, authenticationSelector } from "../features/authentication/authenticationSlice";
import { Link } from 'react-router-dom'

const Authentication = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authenticationSelector);
  const userName = auth.userName;
  const token = auth.token;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="myLogin">
      { token ?<div></div>
          : <div> Login:{" "}
          <input type="text" value={username} placeholder="username" onChange={(e) => setusername(e.target.value)}></input>{" "}
          <input type="password" value={password} placeholder="password" onChange={(e) => setpassword(e.target.value)}></input>{" "}
          <button onClick={() => dispatch(doSigninAsync({ username: username, password: password }))}>Login</button>
          {' or '}
          <Link to='/register'>register</Link>
          </div>
          }
          { token ?<div className="active-user">
          <span>loged in as: {userName}</span>
          <button onClick={() => dispatch(logout())}>Logout</button></div>
          : <div>
            {userName}
          </div>
          }
    </div>
  );
};

export default Authentication;