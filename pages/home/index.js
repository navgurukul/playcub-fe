import {
    Typography,
    Container,
    Button,
    Card,
    Grid,
  } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClassesCard from "./ClassesCard";
import Styles from "../../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import BookAFreeDemoClassButton from "../../common/RegistrationStudent"
import { useEffect, useState } from 'react';
import DailogBox from '../../common/RegistrationTeacher'
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


const HomePage = ()=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const [successMessage,setSuccessMessage]=useState(false)
    const [loading,setLoading]=useState(false)  
    const classes = Styles();
 
    const[email,setEmail]=useState({
        value:'',
        error:false,
        helperText:''
    })
    const[name,setName]=useState('')
    useEffect(()=>{

    },[successMessage])
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
            setLoading(true)

            const response = await fetch('https://playcub.deta.dev/form/submit/newsletter',{
                method:"POST",
                body:JSON.stringify({name,email:email.value}),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((e)=>{
                setLoading(false)
                if(e.status === 400){
                    setEmail({
                        value:'',
                        error:true,
                        helperText:'This email is already exists.Please try again.'
                    })
                
                    setSuccessMessage(false)
                    
                }
                else{
   
                    if (e.status===201){
                        
                        setSuccessMessage(true)
                        setEmail({
                            value:'',
                            error:false,
                            helperText:''
                        })
                        setName('')
                    }      
               }              
            })
        }
        

    }
    
    return (
        <>
            
            
            <Container  align={!isActive&&"center"}  sx={{mt:13}}>
              
                <Box ml={isActive&&2}>
                <Typography variant="h3" mb="16px" >
                    Interactive Coding Classes for Kids
                </Typography>
                <Typography variant="subtitle" color="#6D6D6D" >
                    Teach your kids how to build websites with fun
                </Typography>
                </Box>
                <Container sx={ isActive?{mt: 6 }:{ mt: 6} }    >
                    <Grid container spacing={isActive?5:4} >
                        <Grid item xs={12} sm={6} md={6}   >
                            <Card sx={{borderRadius:'3%', height:"98.1%",position:!isActive&&'relative' ,right:!isActive&&"20px"}}>
                                <img 
                                    src={'https://playcub.s3.ap-south-1.amazonaws.com/assest/Coding.png'} 
                                    // width= {'696px'}
                                    // height={'370px'} 
                                    width="100%" 
                                       
                                    alt="Picture of the student who is doing coding"    
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} align="left">
                            <Box sx={{display:"flex", mb:2,gap:1}}> 
                                <img  
                                    src="https://playcub.s3.ap-south-1.amazonaws.com/assest/Menu+book.png"
                                    className={classes.Icons}
                                    alt="Book logo"           
                                />
                                <Typography variant="body1">
                                    Curriculum designed by experts 
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <img 
                                    // src={require("../../assest/Videocam.png")} 
                                    src="https://playcub.s3.ap-south-1.amazonaws.com/assest/Videocam.png"
                                    className={classes.Icons}
                                    alt="Video logo"
                                />
                                <Typography variant="body1">
                                    Private 1-1 classes
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <img 
                                    src="https://playcub.s3.ap-south-1.amazonaws.com/assest/Perm+contact.png"
                                    className={classes.Icons}
                                    alt="Contact logo"
                                />
                                <Typography variant="body1">
                                    Convenient Scheduling
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2,gap:1}}>
                                <img 
                                    src="https://playcub.s3.ap-south-1.amazonaws.com/assest/Child+care.png"
                                    className={classes.homePageIcon}
                                    alt="Child logo"
                                />
                               
                                <Typography variant="body1">
                                    For kids between 10 to 14 years
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mb:2, gap:1}}>
                                <img 
                                    src="https://playcub.s3.ap-south-1.amazonaws.com/assest/Child+care+(1).png"
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
                            <img 
                                src="https://playcub.s3.ap-south-1.amazonaws.com/assest/teacher.png"
                                alt="Picture of the student who is doing coding"
                                width="100%" 
                            />   
                        </Grid>
                    </Grid>
                </Container>
            <Box  sx={{backgroundColor:"#F5F5F5"}}>
                <Box  sx={{textAlign:"center",  }}>
                    <Typography variant="h4"pt={!isActive?8:4} >
                        Get involved
                    </Typography>
                    <Typography variant="body1" mt={2} mb={2}>
                        Get regular updates about PlayCub???s initiatives
                    </Typography> 
                </Box> 
                <Container maxWidth="sm"  >
                
                {successMessage ===false?
                <Box display={!isActive?"flex":"grid"} p={1} >
                    <Box sx={{mb:!isActive?9:3}}>
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
                                sx={{width:!isActive?"430px":"100%",backgroundColor:"white"}}
                                 
                            />
                    </Box>
                    <Box  flexGrow={0} mb={isActive&&6} >
                        
                    {
                         loading
                          ?<Box sx={{display:'flex',justifyContent:'center'}}>
                            <CircularProgress sx={{color:"#FFCC00"}} />
                          </Box>
                          :
                        
                            <Button onClick={()=>submit()}    sx={{width:!isActive?"150px":"100%", height:!isActive?"45%":"150%",padding:' 8px 16px 8px 16px', backgroundColor:'#FFCC00',ml:!isActive&&"16px"}}  >
                                Subscribe
                            </Button>
                    }
                    </Box>
                    
                </Box>:
                <Box sx={{pb:!isActive?9:3}}>
                    
                        <Alert severity="success"  ><Typography  ml={!isActive&&10}>You have been subscribed successfully. </Typography></Alert>
                    
                </Box>

                }
                
                
               
                </Container>
                
            </Box>
        </>
       

        
    )
}
export default HomePage;