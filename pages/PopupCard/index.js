import {
    Container,
    Button,
    CardContent,
    Card,
    Box,
  } from "@mui/material";
  

const PopupCard = (props)=>{
    return(
        <>
        <Container sx={{mt:25,}} maxWidth="sm" >
            
            <Card sx={{width:"540px",height:"534px",borderRadius:"8",borderColor: '#ffff',border:0}} >
      
                <Box textAlign={"center"} mt={'64px'} mb={2} >
                    <img 
                        src='https://playcub.s3.ap-south-1.amazonaws.com/assest/popup.png'
                        alt="Group image"
                       sx={{ width:' 266.4px',
                        height:' 240px',
                        
                    }}
                       
                                        
                    />  
                </Box>
                <CardContent align="center">
                    
                     {
                         props.children
                     }
                     
                    
                </CardContent>
                <Box sx={{mt:3,mb:3}} textAlign={'center'} >
                    <Button 
                        onClick={()=>props.handleClose()}
                        textAlign={'center'}  
                        sx={{ backgroundColor: 'white',border:'none',width: '176px',
                        height: '48px', }} >
                        Back to Website
                    </Button>
                </Box>
            </Card>
           
        </Container>
        </>
    );
};
export default PopupCard