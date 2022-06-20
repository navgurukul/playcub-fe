import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assest/Playcub 1.svg";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Image from 'next/image';
import BookAFreeDemoClassButton from "./RegistrationStudent"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Container } from '@mui/system';
import Styles from "../styles/styles";

function ElevationScroll(props) {

  
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


const Navbar =(props) => {
  const classes = Styles();
 
  const [isMobileMenuOpen, setisMobileMenuOpen] = React.useState(false); 


  const handleMobileMenuClose = () => {
    setisMobileMenuOpen(false);
  };

  const handleMobileMenuOpen = (event) => {
    setisMobileMenuOpen(true);
  };
  
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <SwipeableDrawer
      id={mobileMenuId}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Container sx={{height:'100%',width:'420px',backgroundColor:'#FFF5CC'}}>
        <Box >
            
            <Box sx={{mt:3,display:"flex"}}>
              <Box  >
                <Link href="/" underline="none" sx={{ml:2}}>
                  <Image  src={Logo}></Image>
                </Link>
              </Box>
              <Box   sx={{ml:20}}>
                <Image 
                   onClick={()=>{
                    handleMobileMenuClose()
                    }}
                    
                      src={require("../assest/close.png")} 
                      // sx={{height:"16px",width:"16px"}}
                      className={classes.closeIcon1}
                      alt="close icon"        
                      
                  />
              </Box>
            </Box>
        
        <MenuItem> 
            <Button sx={{background:'#FFF5CC'}}   > 
              <Link href="/ourVision" underline="none" sx={{color:"#2E2E2E"}}>
                Our Vision
              </Link>
            </Button>
          
        </MenuItem>
        <MenuItem>
          
          <Button  sx={{background:'#FFF5CC' }} >
            <Link href="/ourCirriculaum" underline="none" sx={{color:"#2E2E2E"}}>
              Curriculum  
            </Link>
          </Button>
        </MenuItem>
        <MenuItem >
          <Box
              sx={{
                  display: "grid",
                  // gap: 2,
                  mt:1,
                  width:"86%",
                  mb:2
                      
              }} 
          >
            <BookAFreeDemoClassButton buttonstyle={{ p:"8px,16px"}}/>
          </Box>
        </MenuItem>
        </Box>
      </Container>
    </SwipeableDrawer>
    
  );

  return (
    <Box sx={{top:0}}> 
    <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar sx={{ backgroundColor:"white",height:80,width:"100%"}}
       >
        <Toolbar>
          <Link href="/" underline="none" sx={{mt:2}}>
            <Image  src={Logo}></Image>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button  sx={{background:'#FFF',mt:2,mr:3, p:"8px,16px"}} height="40px"  >
              <Link href="/ourVision" underline="none" sx={{color:"#2E2E2E"}}>
                Our Vision
              </Link>
            </Button>
            <Button  sx={{background:'#FFF',mt:2,mr:3, p:"8px,16px"}} height="40px"  >
              <Link href="/ourCirriculaum" underline="none" sx={{color:"#2E2E2E"}}>
                Curriculum  
              </Link>
            </Button>
            <BookAFreeDemoClassButton buttonstyle={{mt:2, pl:"16px", pr:"16px"}}/>
            
         
            
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" ,color:" #2E2E2E"} }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              
            >
              <Image   src={require("../assest/menu.png")}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
    </Box>
  );
}
export default Navbar;

