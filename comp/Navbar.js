import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../public/Playcub 1.svg";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Image from 'next/image';
import BookAFreeDemoClassButton from "./model"
const Navbar =() =>{
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background:"white", height:90}}>
          <Toolbar>
            <Link href="/" underline="none">
            <Image style={{marginTop:10}} src={Logo}></Image>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button  sx={{background:'#FFF',mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
                <Link href="/ourVision" underline="none" sx={{color:"#2E2E2E"}}>
                  Our vision
                </Link>
              </Button>
              <Button  sx={{background:'#FFF',mt:0.4,mr:3, p:"8px,16px"}} height="40px"  >
                <Link href="/ourCirriculaum" underline="none" sx={{color:"#2E2E2E"}}>
                  Curriculum  
                </Link>
              </Button>
                  <BookAFreeDemoClassButton buttonstyle={{mt:0.4, p:"8px,16px"}}/>
            </Box>                     
          </Toolbar>
        </AppBar>
      
      </Box>
    )
}
export default Navbar;

