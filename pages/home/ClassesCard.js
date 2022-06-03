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


const ClassesCard =()=>{
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const classes = Styles();
    return(
        <>
        <Container maxWidth="100px"sx={{mt:!isActive?7:6,mb:!isActive?6:4, background: "#FFF5CC",align:"right"}}>
            <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} sm={6} md={8}  sx={{position:'relative'}}>
                    <Box sx={{position:'sticky',
                    top:10,
                    }}>
                    <Typography variant="h3" sx={{mt:10,mb:1}}>
                        Web development  
                    </Typography>
                    <Typography variant="body1">
                        Empower your kids to think critically, communicate clearly and build beautiful websites.
                    </Typography>
                    <Box sx={{display:"flex",mt:1}}>
                        <ArrowRightAltIcon variant="body1" sx={{mr:1}} />
                        <Typography variant="body1">
                            20 Classes, 1 hour each
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>
                        <ArrowRightAltIcon variant="body1" sx={{mr:1}} />
                        <Typography variant="body1">
                            Assignments and homework after every session 
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>
                        <ArrowRightAltIcon variant="body1"  sx={{mr:1}} />
                        <Typography variant="body1">
                            Solve doubts in and outside the class 
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>       
                        <ArrowRightAltIcon variant="body1" sx={{mr:1}} />
                        <Typography variant="body1">
                            Free access to materials
                        </Typography>
                    </Box>
                    </Box>
                </Grid> 
                <Grid item xs={12} sm={6} md={4}  align="left" >
                    
        <CardStyle>
                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Web Basic
                            </Typography>
                            <Box variant="body1" sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography >
                                    HTML
                                </Typography>
                            </Box>
                            <Box variant="body1" sx={{display:"flex"}}>   
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography >
                                    CSS
                                </Typography>
                            </Box>
                            <Box variant="body1" sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography >
                                    JavaScript
                                </Typography>
                            </Box>
                            <Box variant="body1" sx={{display:"flex"}}>
                                <ArrowRightAltIcon  sx={{mr:1}} />
                                <Typography  sx={{mb:4 }}>
                                    View full cirriculum 
                                </Typography>
                            </Box>
                            <Box  sx={{display:"flex"}}>
                                <CurrencyRupeeIcon variant="h5" sx={{mt:1.5}}/>
                                <Typography variant="h5">
                                    120 / week
                                </Typography>
                                
                            </Box>
                            <Box>
                                <Typography variant="body1" sx={{ml:1}} >
                                    20 Classes
                                </Typography>
                            </Box>
                            
                            
                        </CardContent>
                        <CardActions >
                            <Button  height="30px" fullWidth >Book a free demo class</Button>     
                        </CardActions>
                    </CardStyle>
                    <CardStyle>

                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Intermediate
                            </Typography>
                            <Box variant="body1" sx={{display:"flex"}}>   
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography >
                                    Intermediate JavaScript
                                </Typography>
                            </Box>
                            <Box variant="body1" sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography >
                                    React JS
                                </Typography>
                            </Box>
                            <Box variant="body1" sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography >
                                    Material UI
                                </Typography>
                            </Box>
                            
                        </CardContent>
                        <CardActions >
                            <Typography sx={{ml:1}} color="#BDBDBD" variant="h6">
                                Coming soon
                            </Typography>
                        </CardActions>
                    </CardStyle>
                    <CardStyle>
                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Advanced
                            </Typography>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="subtitle1">
                                    Advanced JavaScript
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography variant="subtitle1">
                                    Git
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="subtitle1">
                                    Command line
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions >
                            <Typography sx={{ml:1}} color="#BDBDBD" variant="h6">
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
