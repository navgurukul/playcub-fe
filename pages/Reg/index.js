import {
    Typography,
    Container,
    Button,
    CardContent,
    Grid,
    Box,
  } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardStyle from "../../common/cardComponent";
import Image from 'next/image'
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import * as React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import Styles from "../../styles/styles";

const Reg =(props) =>{
    const classes = Styles();
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const [registerdata,setRegisterData]=useState({
        Name:{error:false,errorMsg:'',value:''},
        Email:{error:false,errorMsg:'',value:''},
        age:{error:false,errorMsg:'',value:''},
        phonenumber:{error:false,errorMsg:'',value:''},
        slot:{error:false,errorMsg:'',value:1},
        fetching:{value:false,success:true,failure:false},
      })
      const fetchData=async()=>{
        try{

          const serverStatus= await fetch('https://playcub.deta.dev/ping')
          let slot = registerdata['slot'].value
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
              childAge:parseInt(registerdata['age'].value),
              phoneNumber:registerdata['phonenumber'].value,
              slot: slot==1?'Morning (9 AM to 12 PM)':slot==2?'Afternoon (12 PM to 1 PM)':'Evening (3 PM to 6 PM)',
            })
        }).then(e=>{
          if (e.status===201){
            setRegisterData({...registerdata,fetching:{...registerdata.fetching,success:true,value:false}})
            props.handleSuccessMessageOpen()
            props.handleClose()
          }else{
          setRegisterData({...registerdata,fetching:{...registerdata.fetching,failure:true,value:false}})
  
          }
          
          return e
        }).catch(e=>{
          console.log(e,"fail")
          setRegisterData({...registerdata,fetching:{...registerdata.fetching,failure:true,value:false}})
          return e
        })
          }
        }catch(err){
          console.log(err);
        }
      }
      const handleChange=(e,id)=>{
        var value = e.target.value
        if (id=='phonenumber'){
          if (value.length>13){
            return 
          }
        }
        if (id=='age'){
          if (value.length>2){
            return 
          }
        }
        setRegisterData({...registerdata,[id]:{...registerdata[id],value}})
      }
      const checkEmail=()=>{
        var register=registerdata
        if (!register['Email'].value.includes('@') || !register['Email'].value.includes('.')){
          register['Email'].error=true
          register['Email'].errorMsg='Please enter correct mail id'
        }else{
          register['Email'].error=false
          register['Email'].errorMsg=''
        }
        setRegisterData({...register})

      }
      const checkAge=()=>{
        var register=registerdata
        if (register['age'].value<8 || register['age'].value>17){
          register['age'].error=true
          register['age'].errorMsg='Please enter an age between 8 and 17'
        }else{
          register['age'].error=false
          register['age'].errorMsg=''
        }
        setRegisterData({...register})
      }
      
      const checkPhonenumber=()=>{
        var register=registerdata
        if (register['phonenumber'].value.length<10 || register['phonenumber'].value.length>13){
            register['phonenumber'].error=true
            register['phonenumber'].errorMsg='Please enter a 10 digit number.'
          }else{
            register['phonenumber'].error=false
            register['phonenumber'].errorMsg=''
          }
        setRegisterData({...register})
      }
      const onSubmit=(e)=>{
        var error=false
        var register=registerdata
        if (register['Name'].value.length<=0){
          error=true
          register['Name'].error=true
          register['Name'].errorMsg='name can not be empty'
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
          register['age'].errorMsg='between 8 and 17'
        }else{
          register['age'].error=false
          register['age'].errorMsg=''
        }
        if (register['phonenumber'].value.length<9 || register['phonenumber'].value.length>13){
            error=true
            register['phonenumber'].error=true
            register['phonenumber'].errorMsg='Phone number should be 10 digit number.'
          }else{
            register['phonenumber'].error=false
            register['phonenumber'].errorMsg=''
          }
        if (!error){
          register.fetching.value=true
          fetchData()
        } 
        setRegisterData({...register})
      }      
    return(
        <>
        <Container sx={{mt: 4,ml:0 }} maxWidth="lg" >

      
          <Box sx={{mt:!isActive?5:2,}} >
            <Box display="flex" justifyContent="flex-end"  sx={{mr:!isActive?1:2,mb:!isActive?5:1}}>
                
                <Image 
                    onClick={()=>{
                      props.handleClose()
                      }}
                    src={require("../../assest/close.png")} 
                    className={classes.closeIcon}
                    alt="close image"                
                />
            </Box>
          </Box>
              
          <Grid container spacing={isActive?1:5}>
              <Grid item xs={12} sm={6} md={6}  >
                  <Typography variant="h3">
                      Get started with Playcub
                  </Typography>
                  <Typography variant="body1" mt={2}>
                      Please share a request for a demo class and our team will reach out to you to connect you with a teacher
                  </Typography>
                  <Box
                      component="form"
                      sx={{
                          display: "grid",
                          gap: 5,
                          width:"100%",
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
                          color="warning"    
                          
                          value={registerdata.Name.value} 
                          helperText={registerdata.Name.errorMsg}
                          error={registerdata.Name.error}
                          onChange={(e)=>{handleChange(e,"Name")}} 
                      />

                      <TextField
                          label="Email"
                          onBlur={()=>{
                            checkEmail()}}
                          type="text"
                          color="warning"
                          value={registerdata.Email.value} 
                          helperText={registerdata.Email.errorMsg}
                          error={registerdata.Email.error}
                          onChange={(e)=>{handleChange(e,"Email")}} 
                          name="email"
                          id="email"
                          variant="outlined"
                          
                          
                      />
                      <TextField
                          onBlur={()=>checkAge()}
                          label="Child age"
                          type="number"
                          maxLength={2}
                          value={registerdata.age.value} 
                          helperText={registerdata.age.errorMsg}
                          error={registerdata.age.error}
                          onChange={(e)=>{handleChange(e,"age")}}  
                          name="childAge"
                          id="childAge"
                          variant="outlined"
                          color="warning"
                          
                      />

                      <TextField
                          onBlur={()=>checkPhonenumber()}
                          label="Phone Number"
                          type="number"
                          pattern="^[0-9]{10}$"
                          maxLength={12}
                          value={registerdata.phonenumber.value} 
                          helperText={registerdata.phonenumber.errorMsg}
                          error={registerdata.phonenumber.error}
                          onChange={(e)=>{handleChange(e,"phonenumber")}}
                          name="phoneNumber"
                          id="phoneNumber"
                          variant="outlined"
                          color="warning"
                          
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
                      <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                            >
                                <Typography variant="body1"> <FormControlLabel   control={<Radio color='warning' checked={registerdata.slot.value==1} onChange={()=>handleChange({target:{value:1}},'slot')} name="Morning"/>} label="Morning (9 AM to 12 PM)" /></Typography>
                                <Typography variant="body1"><FormControlLabel  control={<Radio color='warning' checked={registerdata.slot.value==2} onChange={()=>handleChange({target:{value:2}},"slot")} name="Afternoon"/>} label="Afternoon (12 PM to 1 PM)" /></Typography>
                                <Typography variant="body1"><FormControlLabel control={<Radio color='warning' checked={registerdata.slot.value==3} onChange={()=>handleChange({target:{value:3}},'slot')} name="Evening" />} label="Evening (3 PM to 6 PM)" /></Typography>
                            </RadioGroup>
                        </FormControl>

                      <Box
                          sx={{
                              display: "grid",
                              gap: 3,
                              width:isActive?"100%":"54%",
                              mb:3
                              
                              
                          }} 
                      >
                        
                        {
                          registerdata.fetching.value
                          ?<Box sx={{display:'flex',justifyContent:'center'}}>
                            <CircularProgress sx={{color:"#FFCC00"}} />
                          </Box>
                          :
                          <Button onClick={()=>onSubmit()} >
                            Get Your Free Demo Class
                          </Button>
                        }
                      
                      </Box>

                  </Box>
              </Box>   
              </Grid>

              {!isActive&&<Grid item xs={12} sm={6} md={6} >
                  <CardStyle style={{mb:5,maxWidth:"500px"}}>
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
              
                  
              </Grid>}
          </Grid>
        </Container>
        </>
    )
}
export default Reg;