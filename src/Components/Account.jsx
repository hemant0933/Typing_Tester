import React, { useState } from 'react';
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import {Box, AppBar, Modal, Tab, Tabs } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTheme } from '../Context/ThemeContext';
import GoogleButton from 'react-google-button'
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils/errorMapping';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [open,setOpen] = useState(false);
    const [value,setvalue] = useState(0);
    const {theme} = useTheme();

    const [user] = useAuthState(auth);
  const navigate = useNavigate();
    const OpenModal = () => {
      if(user){
        //navigate to the user page
        navigate('/user');
      }
      else{
        setOpen(true);
      }  
     
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleValueChange = (e,v) => {
        setvalue(v);
    }
    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
      signInWithPopup(auth,googleProvider).then((res)=>{
        toast.success('Google login Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          handleClose()
      }).catch((err)=>{
          toast.error(errorMapping[err.code] || 'not able to login with google', {
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

    const handleLogout = () => {
      auth.signOut().then((res) => {
        toast.success('Logged out!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }).catch((err) => {
        toast.error('Not able to Log out!', {
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
    <div>
        <AccountBoxTwoToneIcon style={{ fontSize: "1.5rem",cursor:'pointer' }} onClick={OpenModal} />
      {
        user &&
        <LogoutTwoToneIcon style={{ fontSize: "1.5rem",cursor:'pointer' }} onClick={handleLogout}/>   
      }

      <Modal
        open={open}
        onClose={handleClose}
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
      >
        <div className='modalDiv' style={{
            width:'500px',
            height:'auto',
            borderRadius:'10px',
            textAlign:'center'

        }}>

            <AppBar position='static' style={{background:'transparent'}} >
                <Tabs
                    value={value}
                    onChange={handleValueChange}
                  variant='fullWidth'>
                    <Tab label='login' style={{color:theme.textColor}} ></Tab>    
                    <Tab label='signup' style={{color:theme.textColor}} ></Tab>    
                </Tabs>    
            </AppBar>  
            {value === 0 && <LoginForm handleClose={handleClose} />}  
            {value === 1 && <SignupForm handleClose={handleClose} />}  
            <Box>
              <span>OR</span>
              <GoogleButton style={{width:'100%',marginTop:'15px'}}
                onClick={handleSignInWithGoogle}
              />
            </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Account;
