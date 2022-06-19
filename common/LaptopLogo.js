import {
    Typography,
    Grid,
    Box,
  } from "@mui/material";
import Image from 'next/image'
import Styles from "../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";

const LaptopLogo=()=>{
    const classes = Styles();
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");

    return(
        <Grid item display={'flex'} mb={isActive&&"16px"} >
            <Box  >
                <Image 
                    src={require("../assest/classes.png")} 
                    className={classes.Icons}
                    alt="laptop logo img"
                    
                    />
            </Box>
            <Box sx={{ml:1,mr:1}}>
                <Typography variant="body1" sx={{mt:0.3, mr:"16px", mb:0.3}}>
                    16 Classes
                </Typography>
            </Box>
            
        </Grid>
    )
}
export default LaptopLogo;