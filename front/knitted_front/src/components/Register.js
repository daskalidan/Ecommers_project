import { Box, Button, Card } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { doSignupAsync } from '../features/authentication/authenticationSlice'


const Register = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [staff, setstaff] = useState(false)


  return (
    <Box >
      <Card sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '10%', margin: '10%' }}>
      <h2>register</h2><br/>
      <input type='text' value={username} placeholder='username' onChange={(e) => setusername(e.target.value)}></input>{' '}
      <input type='text' value={email} placeholder='email' onChange={(e) => setemail(e.target.value)}></input>{' '}
      <input type='password' value={password} placeholder='password' onChange={(e) => setpassword(e.target.value)}></input>{' '}
      <span><label>staff:</label><input type='checkbox' value={staff} onChange={(e) => setstaff(e.target.value)}></input></span>
      <Button variant='contained' onClick={() => dispatch(doSignupAsync({ 'username': username, 'email': email, 'password': password, 'is_staff': staff}))}>register</Button>
      </Card>
      </Box>
  )
}

export default Register