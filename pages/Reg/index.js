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
import Image from 'next/image'
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Reg =() =>{
    return(
        <>
        <Container sx={{mt: 4 }} maxWidth="lg" >
            <Grid container>
                <Grid item sm={11} sx ={{mt:2,mb:4}}>
                    <Box display="flex" justifyContent="flex-end">
                        <Image 
                            src={require("./assest/close.png")} 
                            height={"32px"}
                            width={'32px'}
                            alt="close image"
                        />
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={6}  >
                    <Typography variant="h3">
                        Get started with Playcub
                    </Typography>
                    <Typography variant="body1">
                        Please share a request for a demo class and our team will reach out to you to connect you with a teacher
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 5,
                            width: "100%",
                            mt:4,
                            mb:5,
                        }}
                        
                    >
                        <TextField
                            label="Name"
                            type="text"
                            // value={}
                            // name="name"
                            // onChange={}
                            id="name"
                            variant="outlined"
                            required
                        />

                        <TextField
                            label="Email"
                            type="text"
                            // value={}
                            name="email"
                            // onChange={}
                            id="email"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="Child age"
                            type="number"
                            // value={}
                            name="childAge"
                            // onChange={}
                            id="childAge"
                            variant="outlined"
                            required
                        />

                        <TextField
                            label="Phone Number"
                            type="number"
                            pattern="^[0-9]{10}$"
                            // value={}
                            name="phoneNumber"
                            // onChange={}
                            id="phoneNumber"
                            variant="outlined"
                            required
                        />
  
                    
                    <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                        width: "100%",
                        
                        
                    }} >
                        <Typography variant="subtitle1">
                            Preferred slot for the demo class
                        </Typography>
                        <FormGroup>
                            <FormControlLabel variant="body1" control={<Checkbox defaultChecked />} label="Morning (9 AM to 12 PM)" />
                            <FormControlLabel variant="body1" control={<Checkbox defaultChecked />} label="Afternoon (12 PM to 1 PM)" />
                            <FormControlLabel variant="body1" control={<Checkbox defaultChecked />} label="Evening (3 PM to 6 PM)" />
                       
                        </FormGroup>
                        <Box
                            sx={{
                                display: "grid",
                                gap: 3,
                                width: "50%",
                                mb:12
                                
                                
                            }} 
                        >
                        <Button  >
                            Get Your Free Demo Class
                        </Button>
                        </Box>

                    </Box>
                </Box>

                    
                </Grid>

                <Grid item xs={12} sm={6} md={6} >
                    <CardStyle style={{mb:6,maxWidth:"450px"}}>
                        <CardContent >
                            
                            <Typography gutterBottom variant="h5" m={3} component="div">
                                Web Development Basics
                            </Typography>
                            <Typography gutterBottom variant="body1" m={3} paragraph>
                                Empower your kids to think critically, communicate clearly and build beautiful websites
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
                        
                    </CardStyle>
                
                    
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Reg;