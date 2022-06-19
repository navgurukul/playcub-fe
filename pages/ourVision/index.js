import Image from 'next/image'
import {
    Typography,
    Container,
    Grid,
    Box,
  } from "@mui/material";
import BookAFreeDemoClassButton from '../../common/RegistrationStudent';
/* eslint-disable */
import useMediaQuery from "@mui/material/useMediaQuery";
/* eslint-disable */
import { breakpoints } from "../../theme/constant";
import Styles from "../../styles/styles";


const ourVision = ()=>{
    const classes = Styles();
    /* eslint-disable */
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    /* eslint-disable */
    return(
        <>
        <Container  maxWidth="lg" sx={{mt:13,mb:!isActive&&35.2}} >
            <Grid container  spacing={!isActive?12:2} >
                {isActive&&<Grid  item xs={12} sm={6} md={6} >   
                        <Image 
                            src={require("../../assest/Group.png")} 
                            alt="Group image"
                            className={classes.visionImg}
                           
                        
                            
                        
                        />    
                                            
                    </Grid>}
                <Grid item xs={12} sm={6} md={6} mb={isActive&&16} >
                    <Typography variant="h3" sx ={!isActive?{mb:3}:{mb:2}}  >
                    From Cubs to Fearless Developers

                    </Typography>
                    <Typography variant="body1" gutterBottom paragraph sx ={{mb:3}}>
                        PlayCub aims to build a platform that is affordable to all sectors of the population, a chance at equal education and growth, and at the same time aims to create a collective of teachers who grow along with playcub, both intellectually and financially. 

                        
                    </Typography>
                    <Typography variant="body1" gutterBottom paragraph sx ={{mb:3}}>
                        PlayCub offers live classes to students taught by trained teachers who work towards making the student independent and encourage free thinking and exploration.
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",                                                                                                           
                        }}
                        width={isActive?"100%":"238px"}
                         >
                    {/* <Button  > Book a free demo class</Button>  */}
                    <BookAFreeDemoClassButton  />
                    </Box>
                </Grid>

                {!isActive&&<Grid  item xs={12} sm={6} md={6} >   
                    <Image 
                        src={require("../../assest/Group.png")} 
                        alt="Group image"
                        className={classes.visionImg}
                       
                        
                       
                    />    
                                        
                </Grid>}
            </Grid>
        </Container>
     
        </>
    )
}

export default ourVision;