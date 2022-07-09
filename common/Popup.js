import React, { useState,useEffect } from "react";
import {  
    Button,
    Modal,
    Dialog
} from "@mui/material";
import PopupCard from "../pages/PopupCard";
// import { Modal } from "@mui/material";

const PopupCardWithModel = (props)=>{
    const [open,setOpen] = useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    
    useEffect(()=>{
        if (props.open==true){
            handleOpen()
        }
    },[props.open])
    const handleClose=()=>{
        setOpen(false)
        if (props.close){
            props.close()
        }
    }
    return <>
    <Modal
    open={open}
    onClose={handleClose}
    >

    <PopupCard handleClose={handleClose} text={props.text}>
        {props.children}
    </PopupCard>

    </Modal>
    </>
}

export default PopupCardWithModel ;