import React, { useState } from "react";
import {
    Typography,
    Container,
    Button,
    Card,
    Grid,
    IconButton,
    Modal,
} from "@mui/material";
import RegisterPage from "../pages/Reg";
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const BookAFreeDemoClassButton = (props)=>{
      console.log(props);
    const [open,setOpen]=useState(false)
    const handleClose=async()=>{
        await setOpen(false)
    }
    const handleOpen=async()=>{
        await setOpen(true)
    }
    return (
        <>
         <Button sx={props.buttonstyle} 
         fullWidth={props.buttonstyle && props.buttonstyle.fullWidth?true:false}
          onClick={handleOpen}
          >Book a free demo class</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box 
  sx={{
    height:'80%',
    width:'80%',
    marginTop:'6%',
    ml:'10%',
    bgcolor: 'background.paper',
    overflowY:'scroll',
    // p: 4,
    // height:100
}}
  >

{/* <IconButton sx={{
          borderRadius:100,
          // bgcolor:'white',
      }} onClick={()=>{
          handleClose()
          }}>
      <CloseIcon  /></IconButton> */}
    <RegisterPage handleClose={handleClose}/>
  </Box>
</Modal></>
)}
export default BookAFreeDemoClassButton;