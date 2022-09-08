import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doSigninAsync, authenticationSelector, doSignoutAsync } from "../features/authentication/authenticationSlice";
import { Link } from 'react-router-dom'
import { Box, Button, Grid } from "@mui/material";

const Authentication = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authenticationSelector);
  const userName = auth.userName;
  const token = auth.token;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Grid item xs={12}>
      <Box sx={{ backgroundColor: '#2e9d81', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    {/* <div className="myLogin"> */}
      { token ?<div></div>
          : <div> Login:{" "}
          <input type="text" value={username} placeholder="username" onChange={(e) => setusername(e.target.value)}></input>{" "}
          <input type="password" value={password} placeholder="password" onChange={(e) => setpassword(e.target.value)}></input>{" "}
          <Button size="small" variant="contained" onClick={() => dispatch(doSigninAsync({ username: username, password: password }))}>Login</Button>
          {' or '}
          <Button><Link to='/register'>register</Link></Button>
          </div>
          }
          { token ?<div className="active-user">
          <span>loged in as: {userName}</span>
          <Button size="small" variant="contained" onClick={() => dispatch(doSignoutAsync({'token': token}))}>Logout</Button></div>
          : <div>
            {userName}
          </div>
          }
    {/* </div> */}
    </Box>
    </Grid>
  );
};

export default Authentication;