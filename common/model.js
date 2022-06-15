import React, { useState } from "react";
import {  
    Button,
    Dialog,
} from "@mui/material";
import RegisterPage from "../pages/Reg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";

const BookAFreeDemoClassButton = (props)=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
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
      padding:!isActive&&2,
      ml:isActive&&0,
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