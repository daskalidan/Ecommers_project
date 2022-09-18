import { Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { doSignupAsync } from '../features/authentication/authenticationSlice'
import { Link } from 'react-router-dom';


const Register = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [is_staff, setis_staff] = useState(false)
  const [address, setaddress] = useState('')


  return (
    <Box >
      <Paper elevation={3} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '5%', margin: '10%' }}>
        <Stack spacing={2}>
          <Typography variant='h4'>register</Typography>
            <TextField value={username} label='user name' onChange={(e) => setusername(e.target.value)} required size="small" />
            <TextField value={email} label='email' onChange={(e) => setemail(e.target.value)} required size="small" />
            <TextField value={address} label='address' onChange={(e) => setaddress(e.target.value)} required size="small" />
            <TextField type='password' value={password} label='password' onChange={(e) => setpassword(e.target.value)} required size="small" />
            <FormControlLabel control={<Checkbox onChange={(e) => setis_staff(e.target.checked)} />} label='staff' />
            <Button variant='contained' onClick={() => dispatch(doSignupAsync({ username, email, password, is_staff, address }))}>register</Button>
            <Link to='/' ><Button variant='contained'>keep shopping</Button></Link>
            </Stack>
      </Paper>
    </Box>
  )
}

export default Register