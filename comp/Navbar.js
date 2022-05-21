import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';

const Navbar =() =>{
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
            <Button  sx={{background:'#FFF',mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
              <Link href="#" underline="none" sx={{color:"#2E2E2E"}}>
                Our vision
              </Link>
            </Button>
            <Button  sx={{background:'#FFF',mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
              <Link href="/ourCirriculaum" underline="none" sx={{color:"#2E2E2E"}}>
                Curriculum  
              </Link>
            </Button>
            <Button sx={{background:'#FFCC00',mt:0.4, p:"8px,16px"}} height="48px"  >
              <Link href="#" underline="none" sx={{color:"#2E2E2E"}}> 
                Book a free demo class
              </Link>
            </Button>        
          </Box>  
                          
        </Toolbar>
      </AppBar>
      
    </Box>
    )
}
export default Navbar;

