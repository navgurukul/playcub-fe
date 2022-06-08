import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../public/Playcub 1.svg";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Image from 'next/image';
import BookAFreeDemoClassButton from "./model"

const Navbar =() => {
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
              Our vision
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position= 'fixed' justifyContent='space-around' top="0px" left=' 0px' right= '0px '
       sx={{background:"white", height:80,width:"100%"}}>
        <Toolbar>
          <Link href="/" underline="none" sx={{mt:2}}>
            <Image  src={Logo}></Image>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button  sx={{background:'#FFF',mt:2,mr:3, p:"8px,16px"}} height="40px"  >
              <Link href="/ourVision" underline="none" sx={{color:"#2E2E2E"}}>
                Our vision
              </Link>
            </Button>
            <Button  sx={{background:'#FFF',mt:2,mr:3, p:"8px,16px"}} height="40px"  >
              <Link href="/ourCirriculaum" underline="none" sx={{color:"#2E2E2E"}}>
                Curriculum  
              </Link>
            </Button>
            <BookAFreeDemoClassButton buttonstyle={{mt:2, p:"8px,16px"}}/>
            
         
            
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
      {renderMobileMenu}
    </Box>
  );
}
export default Navbar;


