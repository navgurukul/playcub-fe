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
import CardStyle from "../../comp/cardComponent";


const OurCirriculum = () =>{
    return(
        
        <>
            <Container maxWidth='xl' align="left" sx={{mb:5}}  >
                <Typography variant="h2" align="center">
                   Our Cirriculum
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4}  >
                        <CardStyle>
                            <CardContent >
                                
                                <Typography gutterBottom variant="h4" m={3} component="div">
                                    Web Development Basic
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" m={3} component="div">
                                    Empower your kids to think critically, communicate clearly and build beautiful websites
    
                                </Typography>
                                <Box sx={{display:"flex" ,m:3}}>
                                    <ArrowRightAltIcon sx={{mr:1}}/>
                                    <Typography variant="subtitle1">
                                        20 Classes, 1 hour each
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,m:3}}>   
                                    <ArrowRightAltIcon sx={{mr:1}} />
                                    <Typography variant="subtitle1">
                                        Assignments and homework after every session
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,m:3}}>
                                    <ArrowRightAltIcon sx={{mr:1}}/>
                                    <Typography variant="subtitle1">
                                        Solve doubts in and outside the class
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,m:3}}>
                                    <ArrowRightAltIcon sx={{mr:1}}/>
                                    <Typography variant="subtitle1">
                                        Free access to materials
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,m:3}}>
                                    <ArrowRightAltIcon sx={{mr:1}}/>
                                    <Typography variant="subtitle1">
                                        HTML
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,m:3}}>
                                    <ArrowRightAltIcon sx={{mr:1}}/>
                                    <Typography variant="subtitle1">
                                        CSS
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,m:3}}>
                                    <ArrowRightAltIcon sx={{mr:1}}/>
                                    <Typography variant="subtitle1">
                                        Javascript
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",ml:3}}>
                                    <CurrencyRupeeIcon  sx={{mt:0.2,height:45}}/>
                                    <Typography variant="subtitle">
                                        120 / week
                                    </Typography>
                                    
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ml:4}} >
                                        20 Classes
                                    </Typography>
                                </Box>
                                
                                
                            </CardContent>
                            <CardActions >
                                <Button sx={{mb:3,ml:3,mr:3}} height="30px"  fullWidth >Book a free demo class</Button>     
                            </CardActions>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{mt:10}} >
                        <Box>
                        <Typography variant="overline">
                                Lecture 1

                            </Typography>
                            <Typography variant="h5" gutterbottom sx={{mb:2}}>
                                Introduction to the Internet.
                            </Typography>
                       
                            <Typography variant="subtitle1">
                                <li> How the internet works</li>
                                
                            </Typography>
                            <Typography variant="subtitle1">
                                <li> How websites and browser work</li>
                            </Typography>
                        
                            <Typography variant="subtitle1">
                                <li>What is HTML
                                    <ul>
                                    <li> Markup language</li>
                                    <li>Tag and general syntax</li>
                                    <li>Heading tags</li>
                                    <li>a line brake</li>
                                    </ul>
                                </li>
                            </Typography>
                       
                       
                            <Typography variant="subtitle1">
                                ...
                            </Typography>
                        </Box>
                        <Box sx ={{mt:4}}>
                        <Typography variant="overline" >
                                Lecture 2

                            </Typography>
                            <Typography variant="h5" gutterbottom sx={{mb:2}}>
                                Getting started with HTML
                            </Typography>
                       
                            <Typography variant="subtitle1">
                                <li> How the internet works</li>
                                
                            </Typography>
                            <Typography variant="subtitle1">
                                <li> How websites and browser work</li>
                            </Typography>
                        
                            <Typography variant="subtitle1">
                                <li>What is HTML
                                    <ul>
                                    <li> Markup language</li>
                                    <li>Tag and general syntax</li>
                                    <li>Heading tags</li>
                                    <li>a line brake</li>
                                    </ul>
                                </li>
                            </Typography>
                       
                       
                            <Typography variant="subtitle1">
                                ...
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{mt:22}} >
                        <Box >
                            <Typography variant="subtitle1">
                                    <li> How the internet works</li>
                                
                            </Typography>
                            <Typography variant="subtitle1">
                                <li> How websites and browser work</li>
                            </Typography>
                            
                            <Typography variant="subtitle1">
                                <li>What is HTML
                                    <ul>
                                    <li> Markup language</li>
                                    <li>Tag and general syntax</li>
                                    <li>Heading tags</li>
                                    <li>a line brake</li>
                                    </ul>
                                </li>
                            </Typography>
                            
                        
                            <Typography variant="subtitle1">
                                ...
                            </Typography>
                        </Box>
                        <Box sx={{mt:14}} >
                            <Typography variant="subtitle1">
                                    <li> How the internet works</li>
                                
                            </Typography>
                            <Typography variant="subtitle1">
                                <li> How websites and browser work</li>
                            </Typography>
                            
                            <Typography variant="subtitle1">
                                <li>What is HTML
                                    <ul>
                                    <li> Markup language</li>
                                    <li>Tag and general syntax</li>
                                    <li>Heading tags</li>
                                    <li>a line brake</li>
                                    </ul>
                                </li>
                            </Typography>
                            
                        
                            <Typography variant="subtitle1">
                                ...
                            </Typography>
                        </Box>
                    </Grid>
                    
                    </Grid>
                </Box>
                
            </Container>
        
        </>
    )
}
export default OurCirriculum;