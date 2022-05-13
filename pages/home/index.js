import ResponsiveAppBar from "../../comp/appBar";
import Image from 'next/image'
import {
    Typography,
    Container,
    Button,
    Card,
    Grid,
  } from "@mui/material";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideocamIcon from '@mui/icons-material/Videocam';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClassesCard from "./ClassesCard";
import Footer from '../../comp/Footer';

const HomePage = ()=>{
    
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar/>
            <Container  align="center">
                <Typography variant="h1" >
                    Coding Classes for Kids
                </Typography>
                <Typography variant="subtitle0">
                    Teach your kids how to build websites
                </Typography>
                <Container sx={{ mt: 10 }} maxWidth="lg">
                    <Grid container spacing={15}>
                        <Grid item xs={12} sm={6} md={6}  >
                            <Card  borderColor='warning' sx={{ color:'#FFCC00', borderBottom: 7, borderRight: 7 }}>
                                <Image 
                                
                                src={require("./assest/Coding.png")} 
                                width={`1180px`}
                                height={`689px`}
                                borderRadius= {'8%'}
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} align="left">
                            <Typography variant="body1">
                                <MenuBookIcon sx={{pt:0.5,mr:1,color:"#666699"}}/>
                                Cirriculum designed by experts 
                            </Typography>
                            <Typography variant="body1">
                                <VideocamIcon sx={{pt:0.5,mr:1,color:"#666699"}}/>
                                Private 1-1 classes
                            </Typography>
                            <Typography variant="body1">
                                <PermContactCalendarIcon sx={{pt:0.5,mr:1,color:"#666699"}} />
                                Convinient scheduling 
                            </Typography>
                            <Typography variant="body1">
                                <ChildCareIcon sx={{pt:0.5,mr:1,color:"#666699"}} />
                                For kids between 10 to 14 years
                            </Typography>
                            <Typography variant="body1" sx={{mr:1}}>
                            <IconButton sx={{p:0.2,mr:1.2, background:"#666699",color:"#fff",height:18 ,width:18}}>
                                <CurrencyRupeeRoundedIcon 
                                    variant="outlined"
                                    fontSize="small"                                                 
                                    />
                            </IconButton>
                                Teachers keep 100% of the feee

                            </Typography>
                            
                            <Button sx={{background:'#FFCC00', color:"#2E2E2E" ,mt:3, p:"8px,16px"}} height="48px"  >
                                Book a free demo class
                            </Button>
                           
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <ClassesCard />
            <Container  align="center">
                <Typography variant="h2">
                    Get involved
                </Typography>
                <Typography variant="subtitle0">
                    Get regular updates about PlayCub’s initiatives 
                </Typography>
                
                <Box
                sx={{
                    mt:4,
                    width: 650,
                    maxWidth: '100%',
                    mb:18,
                }}
                >
                <TextField fullWidth label="Enter your email"
                 margin="normal"
                 fullWidth
                 name="email"
                 autoComplete="email" 
                 InputProps={{
                    endAdornment: (
                        <Button  fullwidth sx={{p:3,background:'#FFCC00', color:"#2E2E2E" }}  >
                            Subscribe
                        </Button>
                     
                       
                    ),
                    }}
                   >
                   </TextField>
                </Box>
                <Footer />
            </Container>
        </ThemeProvider>
       

        
    )
}
export default HomePage;