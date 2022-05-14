import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const ResponsiveAppBar =() =>{
    return(
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"white", height:90}}>
        <Toolbar>
          
          <Typography
            noWrap
            component="div"
            sx={{ fontSize: "32px",
            lineHeight: '48px',
            fontWeight: 700, 
            fontStyle: 'italic',
            color:"#2E2E2E",
            p:2,
            ml:10,
            display: { xs: 'none', sm: 'block' } }}
          >
           PLAYCUB
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button  sx={{background:'#FFF',color:"#2E2E2E",mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
                Our vision
            </Button>
            <Button  sx={{background:'#FFF',color:"#2E2E2E",mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
                Curriculum  
            </Button>
            <Button sx={{background:'#FFCC00', color:"#2E2E2E" ,mt:0.4, p:"8px,16px"}} height="48px"  >
                Book a free demo class
            </Button>       
          </Box>  
                          
        </Toolbar>
      </AppBar>
      
    </Box>
    )
}
export default ResponsiveAppBar;

