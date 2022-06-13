import Image from 'next/image'
import {
    Typography,
    Container,
    Button,
    Grid,
  } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClassesCard from "./ClassesCard";
import Styles from "../../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import BookAFreeDemoClassButton from "../../comp/model"
import { useState } from 'react';
import DailogBox from '../../comp/dailog'

const HomePage = ()=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const classes = Styles();
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')

    const submit = async () =>{
        const response = await fetch('https://playcub.deta.dev/form/submit/newsletter',{
            method:"POST",
            body:JSON.stringify({name,email}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        setEmail('')
        setName('')

    }
      
    return (
        <>
            <Container  align="center" sx={{mt:13}}>
                <Typography variant="h3" mb={1} >
                    Interactive Coding Classes for Kids
                </Typography>
                <Typography variant="subtitle" color="#6D6D6D">
                    Teach your kids how to build websites with fun
                </Typography>
                <Container sx={ isActive?{mt: 6 }:{ mt: 6}} >
                    <Grid container spacing={isActive?5:4}>
                        <Grid item xs={12} sm={6} md={6}  >
                            <Image 
                                
                                src={require("./assest/Coding1.png")} 
                                // height={isActive&&550}
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
                            <Box
                            sx={{
                                display: "grid",  
                                // buttonstyle={{mt:2, p:"8px,16px",height:"48px"}}                                                                                                         
                            }}
                            width={isActive?"100%":"238px"}
                            >
                            <BookAFreeDemoClassButton />
                            </Box>
                            
                            
                           
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <ClassesCard />
            <Container sx={{mt:!isActive?12:6,mb:!isActive?12:6}} >
                    <Grid container spacing={!isActive?8:6}>
                        <Grid item xs={12} sm={6} md={6}  >                                        
                            <Typography variant="h5" textAlign={isActive&&"center"} >
                            Are you a Professional who wants to share their web dev expertise?
                            </Typography>
                           
                            <DailogBox/>
                            
                            
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} >
                            <Image 
                                
                                src={require("./assest/teacher.png")} 
                                // height={isActive&&550}
                                alt="Picture of the student who is doing coding"
                                
                            />   
                        </Grid>
                    </Grid>
                </Container>
            <Box  sx={{backgroundColor:"#F5F5F5" }}>
                <Box  sx={{textAlign:"center",  }}>
                    <Typography variant="h4"pt={!isActive?8:4} >
                        Get involved
                    </Typography>
                    <Typography variant="body1" mt={2} mb={2}>
                        Get regular updates about PlayCub’s initiatives
                    </Typography> 
                </Box> 
                <Container maxWidth="sm"  >          
               
                <TextField fullWidth label="Enter your email"
                 
                 margin="normal"
                 value={email}
                 onChange={e=>setEmail(e.target.value)}
                 name="email"
                 autoComplete="email" 
                 backgroundColor="white"
                 InputProps={{
                    endAdornment: (
                        <Box sx={{position: 'relative'}} >
                        <Button onClick={submit}  fullwidth={true} sx={{width:"150px",  backgroundColor:'#FFCC00', p:3,}}  >
                            Subscribe
                        </Button>
                        </Box>                      
                    ),
                    }}
                    sx={{mb:!isActive?20:17}}
                   >
                   </TextField>
                
                </Container>  
                
            </Box>
        </>
       

        
    )
}
export default HomePage;