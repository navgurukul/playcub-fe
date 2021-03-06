import * as React from 'react';
import {
    Typography,
    Container,
    Button,
    Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../theme/constant";
import Styles from "../../styles/styles";
import CircularProgress from '@mui/material/CircularProgress';

const TeacherReg =(props) =>{
    const classes = Styles();
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const [value, setValue] = React.useState({
        
            "name": {value:"",error:false,helperText:''},
            "email": {value:"",error:false,helperText:''},
            "phoneNumber": {value:"",error:false,helperText:''},
            "linkedIn": {value:"",error:false,helperText:''},
            "hasTeachingExperience": {value:true,error:false,helperText:''},
            "teachingExperience": {value:"",error:false,helperText:''},
            "notes": {value:"",error:false,helperText:''},
        fetching:{value:false,success:false,failure:false},

          
    });
        const onSubmit=()=>{
            var temp=value
            var error=false
            
            if (!temp['email'].value.includes('@') || !temp['email'].value.includes('.')){
              temp['email'].error=true
              temp['email'].helperText='Please enter correct mail id'
            error=true
            }else{
              temp['email'].error=false
              temp['email'].helperText=''
            }
            if (temp['phoneNumber'].value.length<10 || temp['phoneNumber'].value.length>13){
                temp['phoneNumber'].error=true
                error=true
                temp['phoneNumber'].helperText='Please enter a 10 digit number.'
              }else{
                temp['phoneNumber'].error=false
                temp['phoneNumber'].helperText=''
              }
              
          if (temp['linkedIn'].value.includes('https://www.linkedin.com/')){
              
            temp['linkedIn'].error=false
            temp['linkedIn'].helperText=''
          }else{
            error=true

            temp['linkedIn'].error=true
            temp['linkedIn'].helperText='Please enter proper linked In id'
          }
          if (!error){
            temp.fetching.value=true
            fetchData()
          }
          setValue({...temp})
        }
      const fetchData=async()=>{

        try{
          const serverStatus= await fetch('https://playcub.deta.dev/ping')
          console.log(serverStatus,"status")
          if (serverStatus.statusText=='OK'){
          const response= await fetch('https://playcub.deta.dev/form/submit/teachingPool',
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              name:value['name'].value,
              email:value['email'].value,
              linkedIn:value['linkedIn'].value,
              phoneNumber:value['phoneNumber'].value,
              hasTeachingExperience: value.hasTeachingExperience.value,
              teachingExperience: value.teachingExperience.value,
              notes: value.notes.value,
            })
        }).then(e=>{
          if (e.status===201){
          props.handleSuccessMessageOpen()
          
            setValue({
                "name": {value:"",error:false,helperText:''},
                "email": {value:"",error:false,helperText:''},
                "phoneNumber": {value:"",error:false,helperText:''},
                "linkedIn": {value:"",error:false,helperText:''},
                "hasTeachingExperience": {value:true,error:false,helperText:''},
                "teachingExperience": {value:"",error:false,helperText:''},
                "notes": {value:"",error:false,helperText:''}
                ,fetching:{...value.fetching,success:true,value:false}})
          props.handleClose()
          }else{
            setValue({...value,fetching:{...value.fetching,failure:true,value:false}})
  
          }
          
          return e
        }).catch(e=>{
          console.log(e,"fail")
          setValue({...value,fetching:{...value.fetching,failure:true,value:false}})
          return e
        })
            console.log(response,"response.data")
          }
        }catch(err){
          console.log(err);
        }
      };
      
      const checkEmail=()=>{
        var temp=value
        if (!temp['email'].value.includes('@') || !temp['email'].value.includes('.')){
          temp['email'].error=true
          temp['email'].helperText='Please enter correct mail id'
        }else{
          temp['email'].error=false
          temp['email'].helperText=''
        }
        setValue({...temp})

      }
      
      const checkPhonenumber=()=>{
        var temp=value
        if (temp['phoneNumber'].value.length<10 || temp['phoneNumber'].value.length>13){
            temp['phoneNumber'].error=true
            temp['phoneNumber'].helperText='Please enter a 10 digit number.'
          }else{
            temp['phoneNumber'].error=false
            temp['phoneNumber'].helperText=''
          }
        setValue({...temp})
      }
      const checkLinkedIn=()=>{
          var temp=value
          if (temp['linkedIn'].value.includes('https://www.linkedin.com/')){
              
            temp['linkedIn'].error=false
            temp['linkedIn'].helperText=''
          }else{

            temp['linkedIn'].error=true
            temp['linkedIn'].helperText='Please enter proper linked In id'
          }
        setValue({...temp})
      }

    const handleChange = (event,id) => {
        
        if (id=='phoneNumber'){
            if (event.target.value.length>10){
              return 
            }
          }
        // console.log(event.target.value,id)
        setValue({...value,[id]:{...value[id],value:event.target.value}})
    //   setValue(event.target.value);
    };
    return(
        <>
        <Container  maxWidth="sm"   >
            <Box sx={{mt:5}} >
                <Box display="flex" justifyContent="flex-end"  sx={{mr:!isActive&&6,mb:2}}>
                    
                   <img 
                     onClick={()=>{
                      props.handleClose()
                      }}
                        src="https://playcub.s3.ap-south-1.amazonaws.com/assest/close.png"
                        className={classes.closeIcon}
                        alt="close image"
                        
                        
                        
                    />
                </Box>
                <Box sx={{ml:!isActive&&5,mr:!isActive&&5}}>
                    <Typography variant="h4" >
                        Join Our Teaching Pool
                    </Typography>
                    <Typography variant="body1" mt={2}>
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
                            color="warning"
                            onChange={(e)=>handleChange(e,'name')}
                            value={value.name.value} 
                            helperText={value.name.helperText}
                            error={value.name.error}
                            
                        />

                        <TextField
                            label="Email"
                            type="text"
                            value={value.email.value} 
                            helperText={value.email.helperText}
                            onChange={(e)=>handleChange(e,'email')}
                            error={value.email.error}
                            
                          onBlur={()=>{
                            checkEmail()}}
                            name="email"
                            id="email"
                            variant="outlined"
                            color="warning"
                            
                            
                        />
                    
                        <TextField
                            label="Phone Number (Preferably Whatsapp Enabled)"
                            type="number"
                            pattern="^[0-9]{10}$"
                            maxLength={13}
                            value={value.phoneNumber.value} 
                            helperText={value.phoneNumber.helperText}
                            error={value.phoneNumber.error}
                            onChange={(e)=>handleChange(e,'phoneNumber')} 
                            
                          onBlur={()=>{
                            checkPhonenumber()}}
                            id="phoneNumber"
                            variant="outlined"
                            color="warning"
                           
                        />
                        <TextField
                            label="LinkedIn Profile"
                            type="text"
                            name="LinkedIn"    
                            id="LinkedIn"
                            variant="outlined"
                            color="warning"
                            onBlur={()=>{
                              checkLinkedIn()}}
                            onChange={(e)=>handleChange(e,'linkedIn')}
                            value={value.linkedIn.value} 
                            helperText={value.linkedIn.helperText}
                            error={value.linkedIn.error}
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
                               

                            >
                                <Typography variant="body1"> <FormControlLabel value={true} control={<Radio checked={value.hasTeachingExperience.value==true}  onChange={(e)=>handleChange({target:{value:true}},'hasTeachingExperience')} color='warning' />} label="Yes" /></Typography>
                                <Typography variant="body1"><FormControlLabel value={false} control={<Radio checked={value.hasTeachingExperience.value==false}  onChange={(e)=>handleChange({target:{value:false}},'hasTeachingExperience')} color='warning' />} label="No" /></Typography>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    {value.hasTeachingExperience.value==true&&
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
                              color="warning"
                              onChange={(e)=>handleChange(e,'teachingExperience')}
                              
                              value={value.teachingExperience.value} 
                              helperText={value.teachingExperience.helperText}
                              error={value.teachingExperience.error}
                          />
                      </Box>
                    }
                    <Box
                        component="form"
                        sx={{
                            display: "grid",
                            gap: 2,
                            width: "100%",
                            mt:4,
                            mb:5,
                        }}
                        
                    >
                        <Typography variant="subtitle1">
                            Anything else you???d like us to know?
                        </Typography>
                        <TextField
                            label="Your Answer (Optional)"                    
                            type="text"
                            name="yourAnswer"    
                            id="yourAnswer"
                            variant="outlined"
                            color="warning"
                            onChange={(e)=>handleChange(e,'notes')}             
                            value={value.notes.value} 
                            helperText={value.notes.helperText}
                            error={value.notes.error}
                        />
                    </Box>
                        <Box
                        sx={{
                            display: "grid",
                            gap: 2,
                            width:!isActive?"30%":"100%",
                            mb:2
                               
                        }} 
                    >
                        
                        
                        {
                          value.fetching.value
                          ?<Box sx={{display:'flex',justifyContent:'center'}}>
                            <CircularProgress sx={{color:"#FFCC00"}} />
                          </Box>
                          :
                          <Button onClick={()=>onSubmit()} sx={{mb:4}}>
                            Join Playcub
                          </Button>
                        }
                    </Box>
                
                
                
                </Box>
            </Box>
                    
                
        </Container>
        </>
    )
}
export default TeacherReg;