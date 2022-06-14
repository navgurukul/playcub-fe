import React, { useState } from "react";
import {
    Typography,
    Container,
    Button,
    Card,
    Grid,
    IconButton,
    Modal,
    Dialog,
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
<Dialog
 sx={{
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      padding:5,
      maxWidth: "1140px",  // Set your width here
    },
  },
}}
  open={open}
  scroll={'body'}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    <RegisterPage handleClose={handleClose}/>
</Dialog></>
)}
export default BookAFreeDemoClassButton;