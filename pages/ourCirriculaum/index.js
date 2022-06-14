import {
    Typography,
    Container,
    Button,
    CardContent,
    CardActions,
    Grid,
    Box,
  } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardStyle from "../../comp/cardComponent";
import ClassesData from "../../uitls/ClassesData";
import Image from 'next/image'
import BookAFreeDemoClassButton from "../../comp/model";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";

const OurCirriculum = () =>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    return(
        
        <>
            <Container maxWidth='lg'  sx={{mt:13,mb:2}}  >
                <Typography variant="h4" align="center">
                    Curriculum Overview
                </Typography>
                <Box >
                    <Grid container spacing={!isActive?12:2 }>
                    <Grid item xs={12} sm={6} md={6} mt={!isActive?10:3} ml={isActive&&1}mr={isActive&&1} mb={!isActive&&15}>
                        <Typography variant="h6"  >
                            Web Development Basics  
                        </Typography>
                        <Box>  
                        </Box>
                        <Box sx ={{mt:2,mb:3}} >
                            <Grid container  >
                                <Grid item display={'flex'}>
                                    <Box  >
                                        <Image 
                                            src={require("./assest/classes.png")} 
                                            height={"32px"}
                                            width={'32px'}
                                            alt="laptop logo img"
                                            
                                            />
                                    </Box>
                                    <Box sx={{ml:1,mr:1}}>
                                        <Typography variant="body1" mt={0.3} mb={0.3}>
                                            16 Classes
                                        </Typography>
                                    </Box>
                                    
                                </Grid>
                                <Grid item display={'flex'}>
                                    <Box >
                                
                                        <Image 
                                            
                                            src={require("./assest/video.png")} 
                                            height={"32px"}
                                            width={'32px'}
                                            alt="Video Content logo img"
                                        
                                        />
                                    </Box>
                                    <Box sx={{ml:1,mr:1}} >
                                        <Typography variant="body1"  mt={0.3} mb={0.3}>
                                            Video Content
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item  display={'flex'}>
                                    <Box  >
                                
                                        <Image 
                                            
                                            src={require("./assest/assigments.png")} 
                                            height={"30.54px"}
                                            width={'28.67px'}
                                            alt="Regular Assignments logo img"   
                                        
                                            />
                                    </Box>
                                    <Box sx={{ml:1}}>
                                        <Typography variant="body1"  mt={0.3} >
                                            Regular Assignments
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        {ClassesData.map((value, index)=>{
                            return(
                                <Box key={index}>
                                    <Typography variant="overline"  gutterBottom>
                                        {value.classNo}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{mt:1}}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{mb:3}}>
                                        {value.info}
                                    </Typography>
                                </Box>

                            )
                        })}
                                                
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} mt={!isActive&&10} sx={{mb:10 ,position:'relative'}}  >
                        <Box sx={{position:'sticky',
                        top:10,
                        }}>
                            <CardStyle style={{mb:6,maxWidth:"450px"}}>
                                <CardContent >
                                    
                                    <Typography gutterBottom variant="h5" m={3} component="div">
                                        Web Development Basic
                                    </Typography>
                                    <Typography gutterBottom variant="body1" m={3} paragraph>
                                        Empower your kids to think critically, 
                                        communicate clearly and build beautiful websites
                                    </Typography>
                                    <Box sx={{display:"flex",ml:3}}>
                                        <CurrencyRupeeIcon  sx={{mt:0.2,height:45}}/>
                                        <Typography variant="h5">
                                            120 / week
                                        </Typography>        
                                    </Box>
                                    <Typography variant="body1" ml={4}>
                                        16 Classes
                                    </Typography>
                                    
                                    <Box sx={{display:"flex" ,m:3}}>
                                        <ArrowRightAltIcon sx={{mr:1}}/>
                                        <Typography variant="body1">
                                        Learn HTML, CSS and Javascript
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:"flex",mt:2,m:3}}>   
                                        <ArrowRightAltIcon sx={{mr:1}} />
                                        <Typography variant="body1">
                                        1 hour interactive classes
                                        </Typography>
                                    </Box>
                                    <Box sx={{display:"flex",mt:2,m:3}}>
                                        <ArrowRightAltIcon sx={{mr:1}}/>
                                        <Typography variant="body1">
                                            Assignments and homework after every session
                                        </Typography>
                                    </Box>

                                    <Box sx={{display:"flex",mt:2,m:3}}>
                                        <ArrowRightAltIcon sx={{mr:1}}/>
                                        <Typography variant="body1">
                                            Solve doubts during and outside the class
                                        </Typography>
                                    </Box>
                                    <Box sx={{display:"flex",mt:2,m:3}}>
                                        <ArrowRightAltIcon sx={{mr:1}}/>
                                        <Typography variant="body1">
                                            Free access to materials
                                        </Typography>
                                    </Box>                                   
                            </CardContent>
                            <CardActions >  
                            <Box
                                sx={{
                                    display: "grid",
                                    width: "395px",
                                    mb:3,
                                    ml:2, 
                                    mr:isActive&&2,                               
                                }} >  
                                {/* <Button height={"48px"} fullWidth={true}  >Book a free demo class</Button>                                */}
                                <BookAFreeDemoClassButton  buttonstyle={{fullWidth:true,height:'48px'}} />                      
                                </Box>
                            </CardActions>
                            <Box
                                sx={{
                                    display: "grid",
                                    width: !isActive?"395px":"325px",
                                    mb:3,
                                    ml:3, 
                                                             
                                }} >
                                <Button 
                                href='/playcub.pdf' download={"curriculum.pdf"}
                                height={"715px"}  variant="outlined"  
                                    sx={{ backgroundColor: 'white', borderColor: 'black' }} >
                                    Get Detailed Curriculum
                                </Button>

                                </Box>
                            
                        </CardStyle>
                        </Box>
                    </Grid>
                    
                    
                    </Grid>
                </Box>
                
            </Container>
        
        </>
    )
}
export default OurCirriculum;