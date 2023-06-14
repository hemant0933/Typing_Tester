import { Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import {auth} from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';

const SignupForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = () => {
        if(!email || !password || !confirmPassword){
            toast.warn('😩 Please fill the details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return
        }
        if(password !== confirmPassword){
            toast.warn('❌ Password not matching!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return 
        }

        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user;
            toast.success('☺️ User created!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }).catch((err)=>{
        //    console.log(err);
           toast.error(errorMapping[err.code] || 'some error occured', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }); 
          
          
        })
        
       
    } 
  return (
    <Box
        p={3}
        style={{
            display:'flex',
            flexDirection: "column",
            gap: '20px'
        }}
        >
        <TextField
            variant='outlined'
            type='email'
            label='Enter Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            InputLabelProps={{
                style: {
                    color:theme.textColor
                }
            }}
            InputProps={{
                style: {
                    color:theme.textColor
                }
            }}
        />
        <TextField
            variant='outlined'
            type='password'
            label='Enter Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            InputLabelProps={{
                style: {
                    color:theme.textColor
                }
            }}
            InputProps={{
                style: {
                    color:theme.textColor
                }
            }}
        />
        <TextField
            variant='outlined'
            type='password'
            label='Enter Confirm Password'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            InputLabelProps={{
                style: {
                    color:theme.textColor
                }
            }}
            InputProps={{
                style: {
                    color:theme.textColor
                }
            }}
        />
        <Button 
            variant='contained'
            size='large'
            style={{background:theme.textColor,color:theme.background}}
            onClick={handleSubmit} 
            >Signup</Button>
    </Box>
  );
}

export default SignupForm;
