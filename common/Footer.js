import BottomNavigation from '@mui/material/BottomNavigation';
import Link from '@mui/material/Link';
import Logo from "../assest/Playcub 2.svg";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

const Footer =(props)=>{
    const {  height } =  props;
    const { windowSize,
        bodyScrollHeight} = height;
    const isbodyScrollSmall = windowSize>bodyScrollHeight
    const top = isbodyScrollSmall?windowSize-80:bodyScrollHeight+220
    return(
        <>
        <BottomNavigation
        sx={{ bgcolor:"#2E2E2E",position:isbodyScrollSmall?'absolute':'relative',top:isbodyScrollSmall?top:0,justifyContent:'space-around',alignItems:'center',height:80, bottom: 0, left: 0, right: 0 }} elevation={3}
        showLabels
        >        
            <Link href="/" underline="none" sx={{mt:2}}  aria-label="playcub logo">
                <Image src={Logo} sx={{width:'152px',height:'48px'}} alt='playcub logo' pt="16px" pb="16px"></Image>
            </Link>
            <Typography variant="subtitle1" color={"white"} align="right">
                Made with ❤️ for our students
            </Typography>
                
        </BottomNavigation>
        </>
    )
}
export default Footer;