import Image from 'next/image'
import {
    Typography,
    Container,
    Grid,
    Box,
  } from "@mui/material";
import BookAFreeDemoClassButton from '../../comp/model';
const ourVision = ()=>{
    return(
        <>
        <Container  maxWidth="lg" sx={{mt:13}}>
            <Grid container  spacing={12} >
                <Grid item xs={12} sm={6} md={6}  >
                    <Typography variant="h3" sx ={{mb:3}}>
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
                            gap: 10,
                            width: "238px",
                            
                            
                        }} >
                    {/* <Button  > Book a free demo class</Button>  */}
                    <BookAFreeDemoClassButton />
                    </Box>
                </Grid>

                <Grid  item xs={12} sm={6} md={6} >   
                    <Image 
                        src={require("./assest/Group.png")} 
                        alt="Group image"
                        height={"507px"}
                        width={"544px"}
                    />    
                                        
                </Grid>
            </Grid>
        </Container>
     
        </>
    )
}

export default ourVision;