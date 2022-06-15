import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../public/Playcub 1.svg";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Image from 'next/image';
import BookAFreeDemoClassButton from "./model"

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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null); 

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem> 
          <Button sx={{background:'#FFF',mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
            <Link href="/ourVision" underline="none" sx={{color:"#2E2E2E"}}>
              Our Vision
            </Link>
          </Button>
        
      </MenuItem>
      <MenuItem>
        
        <Button  sx={{background:'#FFF',mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
          <Link href="/ourCirriculaum" underline="none" sx={{color:"#2E2E2E"}}>
            Curriculum  
          </Link>
        </Button>
      </MenuItem>
      <MenuItem >
        
        <BookAFreeDemoClassButton buttonstyle={{mt:0.4, p:"8px,16px"}}/>
      </MenuItem>
    </Menu>
    
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
              <MoreIcon />
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

