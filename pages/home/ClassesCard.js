import React from 'react';
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
import Styles from "../../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import { Link } from '@mui/material';
import BookAFreeDemoClassButton from '../../comp/model';

const ClassesCard =()=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const classes = Styles();
    return(
        <>
        <Container maxWidth="100px"sx={{mt:!isActive?10:6,mb:!isActive?6:4, background: "#FFF5CC",align:"right"}}>
            <Container maxWidth="lg" >
            <Grid container  >
                <Grid item xs={12} sm={6} md={6} mt={4}  sx={{position:'relative'}}>
                    <Box sx={{position:'sticky',
                    top:5,
                    
                    }}
                    >
                    <Typography variant="h4" sx={{mt:5,mb:4}}>
                        Web development  
                    </Typography>
                    <Typography variant="body1" mb={3}>
                        Empower your kids to think critically, communicate clearly and build beautiful websites.
                    </Typography>
                    <Box sx={{display:"flex",mt:1.5}}>
                        <ArrowRightAltIcon  sx={{mr:1}} />
                        <Typography variant="body1">
                            20 Classes, 1 hour each
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1.5}}>
                        <ArrowRightAltIcon  sx={{mr:1}} />
                        <Typography variant="body1">
                            Assignments and homework after every session 
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1.5}}>
                        <ArrowRightAltIcon   sx={{mr:1}} />
                        <Typography variant="body1">
                            Solve doubts in and outside the class 
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1.5}}>       
                        <ArrowRightAltIcon  sx={{mr:1}} />
                        <Typography variant="body1">
                            Free access to materials
                        </Typography>
                    </Box>
                    </Box>
                </Grid> 
                <Grid item xs={12} sm={6} md={6}  >
                    
                    <CardStyle style={{mb:6,mt:10 ,ml:10}} >
                        <CardContent sx={{mt:2,ml:3}} >
                            
                            <Typography gutterBottom mb={3} variant="h4" component="div" >
                                Web Basic
                            </Typography>
                            <Box  sx={{display:"flex",mt:2}} >
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="body1" >
                                    HTML
                                </Typography>
                            </Box>
                            <Box  sx={{display:"flex",mt:2}}>   
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography variant="body1">
                                    CSS
                                </Typography>
                            </Box>
                            <Box  sx={{display:"flex",mt:2}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="body1" >
                                    JavaScript
                                </Typography>
                            </Box>
                            <Box  sx={{display:"flex",mt:3}}>
                                <Typography variant="subtitle1" sx={{mb:4 }}>
                                    <Link href="/ourCirriculaum" ml={2} underline="none" color="#CCA300">
                                        View full cirriculum 
                                    </Link>
                                </Typography>
                                
                            </Box>
                            <Box  sx={{display:"flex"}}>
                                <CurrencyRupeeIcon variant="h5" sx={{mt:1.5}}/>
                                <Typography variant="h5">
                                    120 / week
                                </Typography>
                                
                            </Box>
                            <Box>
                                <Typography variant="body1"  color="#6D6D6D"sx={{ml:1}} >
                                    16 Classes
                                </Typography>
                            </Box>
                            
                            
                        </CardContent>
                        <CardActions sx={{mb:3,mt:2,ml:3,mr:3}} >
                            {/* <Button  height="30px" fullWidth >Book a free demo class</Button>  */}
                            <BookAFreeDemoClassButton buttonstyle={{fullWidth:true}} />    
                        </CardActions>
                    </CardStyle>
                   
                    <CardStyle style={{mb:6 ,ml:10}}>
                    

                        <CardContent  sx={{mt:2,ml:3}}>
                            
                            <Typography gutterBottom variant="h4" component="div">
                               Web Intermediate
                            </Typography>
                            <Box  sx={{display:"flex",mt:2}}>   
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="body1">
                                    Intermediate JavaScript
                                </Typography>
                            </Box>
                            <Box  sx={{display:"flex",mt:2}}>
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography variant="body1" >
                                    React JS
                                </Typography>
                            </Box>
                            <Box  sx={{display:"flex",mt:2}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="body1">
                                    Material UI
                                </Typography>
                            </Box>
                            
                        </CardContent>
                        <CardActions sx={{mb:3}}  >
                            <Typography sx={{ml:4}} color="#BDBDBD" variant="h6">
                                Coming soon
                            </Typography>
                        </CardActions>
                    </CardStyle>
                   
                    <CardStyle style={{mb:6,ml:10}}>
                        <CardContent   sx={{mt:2,ml:3}}>
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Web Advanced
                            </Typography>
                            <Box sx={{display:"flex",mt:2}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="body1">
                                    Advanced JavaScript
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mt:2}}>
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography variant="body1">
                                    Git
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",mt:2}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="body1">
                                    Command line
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions sx={{mb:3}} >
                            <Typography sx={{ml:4}}color="#BDBDBD" variant="h6">
                                Coming soon
                            </Typography>
                        </CardActions>
                    </CardStyle> 
                                     
                </Grid>
            </Grid>
            </Container>
           
        </Container>
            
        </>
    )
}
export default ClassesCard
