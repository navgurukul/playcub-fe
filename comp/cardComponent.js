import React from 'react';
import {Card,} from "@mui/material";

const ClassesCard =(props)=>{
    return( <Card  
    sx={{ 
        borderColor: "#FFCC00 !important", 
        // maxWidth: 345 ,
        border:1, 
        borderBottom: 6, 
        borderRight: 6 ,
        // mt:12,
        // mb:10
       ...props.style
        }}>
            {props.children}
    </Card>)
}
export default ClassesCard;