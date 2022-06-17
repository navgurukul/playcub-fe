import BottomNavigation from '@mui/material/BottomNavigation';
import Link from '@mui/material/Link';
import Logo from "../assest/Playcub 2.svg";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

const Footer =()=>{
    return(
        <>
        <BottomNavigation
        sx={{ bgcolor:"#2E2E2E",position: 'fixed',justifyContent:'space-around',alignItems:'center',height:90, bottom: 0, left: 0, right: 0 }} elevation={3}
        showLabels
        >        
            <Link href="/" underline="none" sx={{mt:2}}>
                <Image src={Logo} height={100} width={100}></Image>
            </Link>
            <Typography variant="subtitle1" color={"white"} align="right">
                Made with ❤️ for our students
            </Typography>
                
        </BottomNavigation>
        </>
    )
}
export default Footer;