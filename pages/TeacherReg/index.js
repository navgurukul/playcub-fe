import * as React from 'react';
import {
    Typography,
    Container,
    Button,
    CardContent,
    Grid,
    Box,
} from "@mui/material";
import Image from 'next/image'
import TextField from "@mui/material/TextField";
import { Link } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const TeacherReg =() =>{
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
   
    return(
        <>
        <Container  maxWidth="sm"   >
            
            <Box sx={{mt:5}} >
                <Box display="flex" justifyContent="flex-end"  sx={{mr:4,mb:2}}>
                    
                    <Image 
                        // onClick={}
                        src={require("./assest/close.png")} 
                        height={"32px"}
                        width={'32px'}
                        alt="close image"
                    
                        
                        
                    />
                </Box>
                <Box sx={{ml:5,mr:5}}>
                    <Typography variant="h4" >
                        Join Our Teaching Pool
                    </Typography>
                    <Typography variant="body1">
                    We are always looking for skilled and passionate teachers. Please express your interest here. In case of any issues applying here, you can also write to us at 
        
                    </Typography>
                    <Typography variant="body1">
                        <Link href="/"  underline="none" color="#CCA300">
                            playcub@navgurukul.org
                        </Link>
                    </Typography>

                
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 2,
                            width: "100%",
                            mt:4,
                            mb:4,
                        }}
                        
                    >
                        <TextField
                            label="Name"
                            type="text"
                            name="name"    
                            id="name"
                            variant="outlined"
                            required
                            // value={} 
                            // helperText={}
                            // error={}
                            // onChange={} 
                        />

                        <TextField
                            label="Email"
                            type="text"
                            // value={} 
                            // helperText={}
                            // error={}
                            // onChange={} 
                            name="email"
                            id="email"
                            variant="outlined"
                            required
                            
                        />
                    
                        <TextField
                            label="Phone Number (Preferably Whatsapp Enabled)"
                            type="number"
                            pattern="^[0-9]{10}$"
                            maxLength={13}
                            // value={} 
                            // helperText={}
                            // error={}
                            // onChange={} 
                            id="phoneNumber"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="LinkedIn Profile"
                            type="text"
                            name="LinkedIn"    
                            id="LinkedIn"
                            variant="outlined"
                            required
                            // value={} 
                            // helperText={}
                            // error={}
                            // onChange={} 
                        />

                

                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 2,
                            width: "100%",
                            mb:4,
                        }}
                    
                    >
                        <Typography variant="subtitle1">
                            Do you have previous experience in teaching?

                        </Typography>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <Typography variant="body1"> <FormControlLabel value="Yes" control={<Radio />} label="Yes" /></Typography>
                                <Typography variant="body1"><FormControlLabel value="No" control={<Radio />} label="No" /></Typography>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 2,
                            width: "100%",
                            mt:4,
                            mb:4,
                        }}
                        
                    >
                        <Typography variant="subtitle1">
                            If yes, what have you taught previously?
                        </Typography>
                        <TextField
                            label="Your Answer"
                            
                            type="text"
                            name="yourAnswer"    
                            id="yourAnswer"
                            variant="outlined"
                            
                            // value={} 
                            // helperText={}
                            // error={}
                            // onChange={} 
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 2,
                            width: "100%",
                            mt:4,
                            mb:4,
                        }}
                        
                    >
                        <Typography variant="subtitle1">
                            Anything else you’d like us to know?
                        </Typography>
                        <TextField
                            label="Your Answer"
                            
                            type="text"
                            name="yourAnswer"    
                            id="yourAnswer"
                            variant="outlined"
                            
                            // value={} 
                            // helperText={}
                            // error={}
                            // onChange={} 
                        />
                    </Box>
                        <Box
                        sx={{
                            display: "grid",
                            gap: 2,
                            width: "30%",
                            mb:20
                            
                            
                        }} 
                    >
                        <Button sx={{mb:4}}>
                            Join Playcub
                        </Button>
                    </Box>
                
                
                
                </Box>
            </Box>
                    
                
        </Container>
        </>
    )
}
export default TeacherReg;