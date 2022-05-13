import React from 'react';
import {
    Typography,
    Container,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
  } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from "../../comp/Footer";
// import {Parallax, ParallaxLayer} from "@react-spring/parallax";

const ClassesCard =()=>{
    return(
        <>
        <Container maxWidth="100%"sx={{mt:10,mb:10, background: "#FFF5CC",align:"right"}}>
            <Container maxWidth="lg">
            <Grid container  >
                <Grid item xs={12} sm={6} md={8} spacing={12}>
                    <Typography variant="h2" sx={{mt:10}}>
                        Web development  
                    </Typography>
                    <Typography variant="body1">
                        Empower your kids to think critically, communicate clearly and build beautiful websites.
                    </Typography>
                    <Typography variant="body1">
                        <ArrowRightAltIcon sx={{mr:1}} />
                        20 Classes, 1 hour each
                    </Typography>
                    <Typography variant="body1">
                        <ArrowRightAltIcon sx={{mr:1}} />
                        Assignments and homework after every session 
                    </Typography>
                    <Typography variant="body1">
                        <ArrowRightAltIcon  sx={{mr:1}} />
                        Solve doubts in and outside the class 
                    </Typography>
                    <Typography variant="body1">
                        <ArrowRightAltIcon sx={{mr:1}} />
                        Free access to materials
                    </Typography>
                </Grid> 
                <Grid item xs={12} sm={6} md={4}  align="left" >
                    <Card  sx={{ borderColor: "#FFCC00 !important", maxWidth: 345 ,border:1, borderBottom: 6, borderRight: 6 ,mt:12,mb:10}}
                   
                    >
                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Basic
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                HTML
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}} />
                                CSS
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                JavaScript
                            </Typography>
                            <Typography  variant="subtitle1"  color="#FFCC00" sx={{mb:4}}>
                                <ArrowRightAltIcon color="warning" sx={{mr:1}} />
                                View full cirriculum 
                            </Typography>
                            <Typography variant="subtitle0">
                                <CurrencyRupeeIcon />
                                120 / week
                            </Typography>
                            <Typography variant="subtitle1" >
                                20 Classes
                            </Typography>
                            
                        </CardContent>
                        <CardActions >
                            <Button sx={{background:'#FFCC00', color:"#2E2E2E" }} height="30px" fullWidth >Book a free demo class</Button>     
                        </CardActions>
                    </Card>
                    <Card  sx={{ borderColor: "#FFCC00 !important", maxWidth: 345 ,border:1, borderBottom: 6, borderRight: 6 ,mt:12,mb:8}}
                   
                    >
                        <CardContent >
                            
                            <Typography gutterBottom variant="h4" component="div">
                                Intermediate
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                Intermediate JavaScript
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}} />
                                React JS
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                Material UI
                            </Typography>
                            
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
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                Advanced JavaScript
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}} />
                                Git
                            </Typography>
                            <Typography variant="subtitle1">
                                <ArrowRightAltIcon sx={{mr:1}}/>
                                Command line
                            </Typography>
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
