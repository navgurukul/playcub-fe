import Image from 'next/image'
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
import { width } from '@mui/system';

const ourVision = ()=>{
    return(
        <>
        <Container  maxWidth="lg" sx={{mt:10}}>
                    <Grid container >
                        <Grid item xs={12} sm={6} md={6}  >
                            <Typography variant="h3" sx ={{mb:3}}>
                                Get Kids from Cubs to Fearless Developers

                            </Typography>
                            <Typography variant="body1" gutterBottom paragraph sx ={{mb:3}}>
                                PlayCub aims to build a platform that is affordable to all sectors of the population, a chance at equal education and growth, and at the same time aims to create a collective of teachers who grow along with playcub, both intellectually and financially. 

                                
                            </Typography>
                            <Typography variant="body1" gutterBottom paragraph sx ={{mb:3}}>
                                PlayCub offers live classes to students taught by trained teachers who work towards making the student independent and encourage free thinking and exploration.
                            </Typography>
                            <Button  sx={{pl:16,pr:16, mt:2}} > Book a free demo class</Button> 
                           
                        </Grid>

                        <Grid  item xs={12} sm={6} md={6}>   
                            <Image 
                                src={require("./assest/Group.png")} 
                                alt="Group image"
                            />    
                                              
                        </Grid>
                    </Grid>
                </Container>
     
        </>
    )
}

export default ourVision;