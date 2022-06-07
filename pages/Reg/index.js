import {
    Typography,
    Container,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Box,
    IconButton,
  } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardStyle from "../../comp/cardComponent";
import Image from 'next/image'
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import * as React from 'react';

const Reg =(props) =>{
    const [registerdata,setRegisterData]=useState({
        Name:{error:false,errorMsg:'',value:''},
        Email:{error:false,errorMsg:'',value:''},
        age:{error:false,errorMsg:'',value:''},
        phonenumber:{error:false,errorMsg:'',value:''},
        slot:{error:false,errorMsg:'',value:0},
        fetching:{value:false,success:false,failure:false},
      })
      const fetchData=async()=>{
        try{
          const serverStatus= await fetch('https://playcub.deta.dev/ping')
  
          console.log(serverStatus,"status")
          if (serverStatus.statusText=='OK'){
          const response= await fetch('https://playcub.deta.dev/form/submit/demoClass',
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              name:registerdata['Name'].value,
              email:registerdata['Email'].value,
              childAge:parseInt(registerdata['age'].value)
            })
        }).then(e=>{
          if (e.status===201){
            setRegisterData({...registerdata,fetching:{...registerdata.fetching,success:true,value:false}})
  
          }else{
          setRegisterData({...registerdata,fetching:{...registerdata.fetching,failure:true,value:false}})
  
          }
          
          return e
        }).catch(e=>{
          console.log(e,"fail")
          setRegisterData({...registerdata,fetching:{...registerdata.fetching,failure:true,value:false}})
          return e
        })
            console.log(response,"response.data")
          }
        }catch(err){
          console.log(err);
        }
      }
      const handleChange=(e,id)=>{
        setRegisterData({...registerdata,[id]:{...registerdata[id],value:e.target.value}})
      }
      const onSubmit=(e)=>{
        var error=false
        var register=registerdata
        console.log(register['age'].value<8,"submited");
        if (register['Name'].value.length<=2){
          error=true
          register['Name'].error=true
          register['Name'].errorMsg='name should be grater than 2 letters'
        }else{
          register['Name'].error=false
          register['Name'].errorMsg=''
        }
        if (!register['Email'].value.includes('@') || !register['Email'].value.includes('.')){
          error=true
          register['Email'].error=true
          register['Email'].errorMsg='Enter correct mail id'
        }else{
          register['Email'].error=false
          register['Email'].errorMsg=''
        }
        if (register['age'].value<8 || register['age'].value>17){
          error=true
          register['age'].error=true
          register['age'].errorMsg='betwee 8 and 17'
        }else{
          register['age'].error=false
          register['age'].errorMsg=''
        }
        if (register['phonenumber'].value<0 ||register['phonenumber'].value<10 ){
            error=true
            register['phonenumber'].error=true
            register['phonenumber'].errorMsg='Phone number should be 10 digit number.'
          }else{
            register['phonenumber'].error=false
            register['phonenumber'].errorMsg=''
          }
        if (!error){
          register.fetching.value=true
        //   fetchData()
        } 
        setRegisterData({...register})
        
      }

      const [state, setState] = React.useState({
        Morning: false,
        Afternoon: false,
        Evening: false,
      });
    
      const handleChange1 = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { Morning , Afternoon, Evening } = state;
    return(
        <>
        <Container sx={{mt: 4,ml:20 }} maxWidth="lg" >
            <Grid container>
                <Grid item sm={11} sx ={{mt:2,mb:4, ml:5}}>
                    <Box display="flex" justifyContent="flex-end">
                        
                        <Image 
                        onClick={()=>{
                            props.handleClose()
                            }}
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
                            name="name"    
                            id="name"
                            variant="outlined"
                            required
                            value={registerdata.Name.value} 
                            helperText={registerdata.Name.errorMsg}
                            error={registerdata.Name.error}
                            onChange={(e)=>{handleChange(e,"Name")}} 
                        />

                        <TextField
                            label="Email"
                            type="text"
                            value={registerdata.Email.value} 
                            helperText={registerdata.Email.errorMsg}
                            error={registerdata.Email.error}
                            onChange={(e)=>{handleChange(e,"Email")}} 
                            name="email"
                            id="email"
                            variant="outlined"
                            required
                            
                        />
                        <TextField
                            label="Child age"
                            type="number"
                            value={registerdata.age.value} 
                            helperText={registerdata.age.errorMsg}
                            error={registerdata.age.error}
                            onChange={(e)=>{handleChange(e,"age")}}  
                            name="childAge"
                            id="childAge"
                            variant="outlined"
                            required
                        />

                        <TextField
                            label="Phone Number"
                            type="number"
                            pattern="^[0-9]{10}$"
                            value={registerdata.phonenumber.value} 
                            helperText={registerdata.phonenumber.errorMsg}
                            error={registerdata.phonenumber.error}
                            onChange={(e)=>{handleChange(e,"phonenumber")}}
                            name="phoneNumber"
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
                            <FormControlLabel variant="body1" control={<Checkbox checked={Morning} onChange={handleChange1} name="Morning"/>} label="Morning (9 AM to 12 PM)" />
                            <FormControlLabel variant="body1" control={<Checkbox checked={Afternoon} onChange={handleChange1} name="Afternoon"/>} label="Afternoon (12 PM to 1 PM)" />
                            <FormControlLabel variant="body1" control={<Checkbox checked={Evening} onChange={handleChange1} name="Evening" />} label="Evening (3 PM to 6 PM)" />
                       
                        </FormGroup>
                        <Box
                            sx={{
                                display: "grid",
                                gap: 3,
                                width: "50%",
                                mb:12
                                
                                
                            }} 
                        >
                        <Button onClick={()=>onSubmit()} >
                            Get Your Free Demo Class
                        </Button>
                        </Box>

                    </Box>
                </Box>

                    
                </Grid>

                <Grid item xs={12} sm={6} md={6} >
                    <CardStyle style={{mb:6,maxWidth:"500px"}}>
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