import React from 'react';
import {
    Typography,
    Container,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Box,
  } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from "../../comp/Footer";


const ClassesCard =()=>{
    return(
        <>
        <Container maxWidth="100px"sx={{mt:10,mb:6, background: "#FFF5CC",align:"right"}}>
            <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} sm={6} md={8}  sx={{position:'relative'}}>
                    <Box sx={{position:'sticky',
                    top:10,
                    }}>
                    <Typography variant="h2" sx={{mt:10}}>
                        Web development  
                    </Typography>
                    <Typography variant="body1">
                        Empower your kids to think critically, communicate clearly and build beautiful websites.
                    </Typography>
                    <Box sx={{display:"flex",mt:1}}>
                        <ArrowRightAltIcon sx={{mr:1}} />
                        <Typography variant="body1">
                            20 Classes, 1 hour each
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>
                        <ArrowRightAltIcon sx={{mr:1}} />
                        <Typography variant="body1">
                            Assignments and homework after every session 
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>
                        <ArrowRightAltIcon  sx={{mr:1}} />
                        <Typography variant="body1">
                            Solve doubts in and outside the class 
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>       
                        <ArrowRightAltIcon sx={{mr:1}} />
                        <Typography variant="body1">
                            Free access to materials
                        </Typography>
                    </Box>
                    </Box>
                </Grid> 
                <Grid item xs={12} sm={6} md={4}  align="left" >
                    <Card  sx={{ borderColor: "#FFCC00 !important", maxWidth: 345 ,border:1, borderBottom: 6, borderRight: 6 ,mt:12,mb:10}}
                   
                    >
                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Basic
                            </Typography>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="subtitle1">
                                    HTML
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>   
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography variant="subtitle1">
                                    CSS
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="subtitle1">
                                    JavaScript
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon color="warning" sx={{mr:1}} />
                                <Typography  variant="subtitle1"  color="#FFCC00" sx={{mb:4}}>
                                    View full cirriculum 
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <CurrencyRupeeIcon  sx={{mt:0.1,height:45}}/>
                                <Typography variant="subtitle0">
                                    120 / week
                                </Typography>
                                
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ml:1}} >
                                    20 Classes
                                </Typography>
                            </Box>
                            
                            
                        </CardContent>
                        <CardActions >
                            <Button  height="30px" fullWidth >Book a free demo class</Button>     
                        </CardActions>
                    </Card>
                    <Card  sx={{ borderColor: "#FFCC00 !important", maxWidth: 345 ,border:1, borderBottom: 6, borderRight: 6 ,mt:12,mb:8}}
                   
                    >
                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Intermediate
                            </Typography>
                            <Box sx={{display:"flex"}}>   
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="subtitle1">
                                    Intermediate JavaScript
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}} />
                                <Typography variant="subtitle1">
                                    React JS
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex"}}>
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                <Typography variant="subtitle1">
                                    Material UI
                                </Typography>
                            </Box>
                            
                        </CardContent>
                        <CardActions >
                            <Typography sx={{ml:1}} color="#BDBDBD" variant="subtitle0">
                                Coming soon
                            </Typography>
                        </CardActions>
                    </Card>
                    <Card  sx={{ borderColor: "#FFCC00 !important", maxWidth: 345 ,border:1, borderBottom: 6, borderRight: 6 ,mt:12,mb:10}}
                   
                    >
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
                            <Typography sx={{ml:1}} color="#BDBDBD" variant="subtitle0">
                                Coming soon
                            </Typography>
                        </CardActions>
                    </Card>
                    

                        
                </Grid>
            </Grid>
            </Container>
            <Footer />
        </Container>
            
        </>
    )
}
export default ClassesCard
