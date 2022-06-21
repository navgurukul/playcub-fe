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
import BookAFreeDemoClassButton from "../../common/RegistrationStudent"
import { useState } from 'react';
import DailogBox from '../../common/RegistrationTeacher'

const HomePage = ()=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const classes = Styles();
    const[email,setEmail]=useState({
        value:'',
        error:false,
        helperText:''
    })
    const[name,setName]=useState('')
    const checkEmail=()=>{
        var instance=email
        if (instance.value==''){
            return false
        }
        if (!instance.value.includes('@') || !instance.value.includes('.')){
          instance.error=true
          instance.helperText='Enter correct mail id'
        }else{
          instance.error=false
          instance.helperText=''
        }
        setEmail({...instance})
        return instance.error

    }
    const submit = async () =>{
        var instance=email
        if (!instance.value.includes('@') || !instance.value.includes('.')){
          instance.error=true
          instance.helperText='Enter correct mail id'
        setEmail({...instance})

        }
        else{
            const response = await fetch('https://playcub.deta.dev/form/submit/newsletter',{
                method:"POST",
                body:JSON.stringify({name,email:email.value}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await response.json()
            console.log(data)
            setEmail({
                value:'',
                error:false,
                helperText:''
            })
            setName('')
        }
        

    }
      
    return (
        <>
            <Container  align={!isActive&&"center"} sx={{mt:13}}>
                <Typography variant="h3" mb="16px" >
                    Interactive Coding Classes for Kids
                </Typography>
                <Typography variant="subtitle" color="#6D6D6D">
                    Teach your kids how to build websites with fun
                </Typography>
                <Container sx={ isActive?{mt: 6 }:{ mt: 6}} >
                    <Grid container spacing={isActive?5:4}>
                        <Grid item xs={12} sm={6} md={6}  >
                            <Image 
                                
                                src={require("../../assest/Coding1.png")} 
                                // height={isActive&&550}
                                alt="Picture of the student who is doing coding"
                                
                                />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} align="left">
                            <Box sx={{display:"flex", mb:2,gap:1}}> 
                                <Image 
                                    src={require("../../assest/Menu book.png")} 
                                    className={classes.Icons}
                                    alt="Book logo"
                                            
                                />
                                <Typography variant="body1">
                                    Curriculum designed by experts 
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <Image 
                                    src={require("../../assest/Videocam.png")} 
                                    className={classes.Icons}
                                    alt="Video logo"
                                
                                />
                                <Typography variant="body1">
                                    Private 1-1 classes
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <Image 
                                    src={require("../../assest/Perm contact.png")} 
                                    className={classes.Icons}
                                    alt="Contact logo"
                                
                                />
                                <Typography variant="body1">
                                    Convenient Scheduling
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <Image 
                                    src={require("../../assest/Child care.png")} 
                                    className={classes.homePageIcon}
                                    alt="Child logo"
                                
                                />
                               
                                <Typography variant="body1">
                                    For kids between 10 to 14 years
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2, gap:1}}>
                                <Image 
                                        src={require("../../assest/Child care (1).png")} 
                                        className={classes.homePageIcon}
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
                            <Typography variant="h5"  >
                            Are you a Professional who wants to share their web dev expertise?
                            </Typography>
                           
                            <DailogBox/>
                            
                            
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} >
                            <Image 
                                
                                src={require("../../assest/teacher.png")} 
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
                <Box display="flex" p={1} >
                    <Box sx={{mb:!isActive?9:6}}>
                        <TextField
                                label="Enter your email"
                                type="text"
                                name="email"    
                                id="email"
                                variant="outlined"
                                color="warning"
                                onBlur={()=>checkEmail()}
                                value={email.value}
                                helperText={email.helperText}
                                error={email.error}
                                onChange={e=>setEmail({...email,value:e.target.value})}
                                sx={{width:!isActive?"430px":"150%",backgroundColor:"white"}}
                                // onChange={} 
                            />
                    </Box>
                    <Box  flexGrow={0} >
                        <Button onClick={submit}    sx={{width:!isActive?"150px":"120%", height:!isActive?"45%":"51%",padding:' 8px 16px 8px 16px', backgroundColor:'#FFCC00',}}  >
                            Subscribe
                        </Button>
                    </Box>
                    
                </Box>


                {/* <Box display={'flex'} sx={{mb:!isActive?9:6}}
                >       
                    <Box
                    component="form"
                    sx={{
                        display: "grid",
                        gap: 5,
                        width: "430px",
                        height:10,
                        backgroundColor:"white",
                       
                        mb:5,
                    }}
                     >
                   
                        <TextField
                            label="Enter your email"
                            type="text"
                            name="email"    
                            id="email"
                            variant="outlined"
                            color="warning"
                            onBlur={()=>checkEmail()}
                            value={email.value}
                            helperText={email.helperText}
                            error={email.error}
                            onChange={e=>setEmail({...email,value:e.target.value})}
                            // sx={{width:"430px",backgroundColor:"white"}}
                            // onChange={} 
                        /> */}
                        {/* <TextField fullWidth label="Enter your email"
                        onBlur={()=>checkEmail()}
                        margin="normal"
                        color="warning"
                        value={email.value}
                        helperText={email.helperText}
                        error={email.error}
                        onChange={e=>setEmail({...email,value:e.target.value})}
                        sx={{width:"430px",height:"48px",backgroundColor:"white"}}
                        name="email"
                        autoComplete="email" 
                        //  InputProps={{
                        //     endAdornment: (
                        //         <Box sx={{position: 'relative'}} >
                        //         <Button onClick={submit}   fullwidth={true} sx={{width:"150px",  backgroundColor:'#FFCC00', p:3,}}  >
                        //             Subscribe
                        //         </Button>
                        //         </Box>                      
                        //     ),
                        //     }}
                        
                            // sx={{mb:!isActive?9:6}}
                        >
                        </TextField> */}
                    {/* </Box>
                    <Box
                        // sx={{
                        //     display: "grid",                                                                                                           
                        // }}
                        // width={isActive?"100%":"238px"}
                         >
                        <Button onClick={submit}    sx={{width:"150px", height:"48px",padding:' 8px 16px 8px 16px', backgroundColor:'#FFCC00',}}  >
                            Subscribe
                        </Button>
                    </Box>
                </Box>  */}
                
                </Container>  
                
            </Box>
        </>
       

        
    )
}
export default HomePage;