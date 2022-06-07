import Image from 'next/image'
import {
    Typography,
    Container,
    Button,
    Card,
    Grid,
    Modal,
  } from "@mui/material";
import React, { useState } from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideocamIcon from '@mui/icons-material/Videocam';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClassesCard from "./ClassesCard";
import RegisterPage from "../../comp/register";
import CloseIcon from '@mui/icons-material/Close';
import Styles from "../../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import BookAFreeDemoClassButton from "../../comp/model"

const HomePage = ()=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const classes = Styles();

   
    return (
        <>
            <Container  align="center" sx={{mt:1}}>
                <Typography variant="h3" >
                    Interactive Coding Classes for Kids
                </Typography>
                <Typography variant="subtitle">
                    Teach your kids how to build websites with fun
                </Typography>
                <Container sx={ isActive?{mt: 4 }:{ mt: 6}} maxWidth="lg">
                    <Grid container spacing={isActive?5:4}>
                        <Grid item xs={12} sm={6} md={6}  >
                            {/* <Card  bordercolor='warning'height={isActive?334:'auto'} sx={{maxWidth: 500  , color:'#FFCC00', borderBottom: 7, borderRight: 7 }}>
                                <Image 
                                
                                src={require("./assest/Coding.png")} 
                                sx={{borderRadius:'8%'}}
                                />
                            </Card> */}
                            <Image 
                                
                                src={require("./assest/Coding1.png")} 
                                height={isActive&&334}
                                alt="Picture of the student who is doing coding"
                                
                                />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} align="left">
                            <Box sx={{display:"flex", mb:2,gap:1}}> 
                                <Image 
                                    src={require("./assest/Menu book.png")} 
                                    height={'32px'}
                                    width={'32px'}
                                    alt="Book logo"
                                   
                                
                                />
                                <Typography variant="body1">
                                    Cirriculum designed by experts 
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <Image 
                                    src={require("./assest/Videocam.png")} 
                                    height={'32px'}
                                    width={'32px'}
                                    alt="Video logo"
                                
                                />
                                <Typography variant="body1">
                                    Private 1-1 classes
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <Image 
                                    src={require("./assest/Perm contact.png")} 
                                    height={'32px'}
                                    width={'32px'}
                                    alt="Contact logo"
                                
                                />
                                <Typography variant="body1">
                                    Convinient scheduling 
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <Image 
                                    src={require("./assest/Child care.png")} 
                                    height={'32px'}
                                    width={'32px'}
                                    alt="Child logo"
                                
                                />
                               
                                <Typography variant="body1">
                                    For kids between 10 to 14 years
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2, gap:1}}>
                                <Image 
                                        src={require("./assest/Child care (1).png")} 
                                        height={'32px'}
                                        width={'32px'}
                                        alt="Rupee logo"
                                        
                                    
                                    />
                                <Typography variant="body1" >
                                    Teachers keep 100% of the feee
                                </Typography>
                            </Box>
                            
                            <BookAFreeDemoClassButton buttonstyle={{mt:2, p:"8px,16px",height:"48px"}}/>
                           
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <ClassesCard />
            <Container  align="center">
                <Typography variant="h3">
                    Get involved
                </Typography>
                <Typography variant="subtitle">
                    Get regular updates about PlayCub’s initiatives
                </Typography>
                
                <Box
                sx={{
                    mt:!isActive?3:1,
                    width: 550,
                    maxWidth: '100%',
                    mb:!isActive?16:14,
                    display:"inline-block",
                
                }}
                >
                <TextField fullWidth label="Enter your email"
                 margin="normal"
                 name="email"
                 autoComplete="email" 
                 InputProps={{
                    endAdornment: (
                        <Box sx={{position:'absolute',}} left={!isActive?"75%":"64.5%"}>
                        <Button  fullwidth sx={{p:3.4 , backgroundColor:'#FFCC00', position:'relative'}}  >
                            Subscribe
                        </Button>
                        </Box>
                        
                     
                       
                    ),
                    }}
                   >
                   </TextField>
                </Box>
                
            </Container>
        </>
       

        
    )
}
export default HomePage;