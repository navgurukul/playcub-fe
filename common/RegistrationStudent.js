import React, { useEffect, useState } from "react";
import {  
    Button,
    Dialog,
    Typography,
} from "@mui/material";
import RegisterPage from "../pages/Reg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";
import PopupCardWithModel from './Popup';

const BookAFreeDemoClassButton = (props)=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const [open,setOpen]=useState(false)
    const [successMessage,setSuccessMessage]=useState(false)
    const handleClose=async()=>{
        await setOpen(false)
    }
    const handleOpen=async()=>{
        await setOpen(true)
    }
    useEffect(()=>{

    },[successMessage])
    return (
        <>
        
        <PopupCardWithModel 
        open={successMessage}
        >
          <Typography variant="body1">
          Thank you for interest in the free demo class with Playcub. We will reach you within 24 hours.
          </Typography>
        </PopupCardWithModel>
         <Button sx={props.buttonstyle} 
         fullWidth={props.buttonstyle && props.buttonstyle.fullWidth?true:false}
          onClick={handleOpen}
          >Book a free demo class</Button>
<Dialog
 sx={{
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "100%",
      padding:!isActive&&2,
      ml:isActive&&0,
      maxWidth: "1140px",  // Set your width here
    },
    ":after":{
      display:"inline"
    }
  },
}}
  open={open}
  scroll={'body'}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    <RegisterPage handleSuccessMessageOpen={()=>{
      setSuccessMessage(true)
      }} handleClose={handleClose}/>
</Dialog></>
)}
export default BookAFreeDemoClassButton;