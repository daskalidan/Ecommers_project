import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doSigninAsync, authenticationSelector, doSignoutAsync, selectStaff } from "../features/authentication/authenticationSlice";
import { Link } from 'react-router-dom'
import { Box, Button, Grid } from "@mui/material";
import { Link as Link1} from "@mui/material";


const Authentication = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authenticationSelector);
  const staff = useSelector(selectStaff)
  const userName = auth.userName;
  const token = auth.token;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Grid item xs={12}>
      <Box sx={{ backgroundColor: '#2e9d81', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        {staff &&  <Link1 href='http://localhost:8000/admin/login/?next=/admin/' target="_blank" rel="noreferrer" underline="hover" sx={{ color: '#dbc536' }}>Django admin site</Link1>} 
        {token && <Box component="span">loged in as: {userName}</Box>}
        {token && <Button size="small" variant="contained" onClick={() => dispatch(doSignoutAsync({'token': token}))}>Logout</Button>}
      
        {!token && <Box component="span">Login:{" "}
          <input type="text" value={username} placeholder="username" onChange={(e) => setusername(e.target.value)}></input>{" "}
          <input type="password" value={password} placeholder="password" onChange={(e) => setpassword(e.target.value)}></input>{" "}
          <Button size="small" variant="contained" onClick={() => dispatch(doSigninAsync({ username: username, password: password }))}>Login</Button>
          {' or '}
          <Link to='/register' sx={{ color: 'white' }}><Button size="small" variant="contained" >register</Button></Link></Box>}
          {!token && <Box component="span">{userName}</Box>}
    </Box>
    </Grid>
  );
};

export default Authentication;