import {
    Typography,
    Grid,
    Box,
  } from "@mui/material";
import Image from 'next/image'
import Styles from "../theme/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";

const VideoLogo=()=>{
    const classes = Styles();
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");


    return(
        <Grid item  display={'flex'} mb={isActive&&"16px"}>
            <Box >
        
                <Image 
                    
                    src={require("../assest/video.png")} 
                    className={classes.Icons}
                    alt="Video Content logo img"
                
                />
            </Box>
            <Box sx={{ml:1,mr:1}} >
                <Typography variant="body1" sx={{mr:"16px", mt:0.3, mb:0.3}} >
                    Video Content
                </Typography>
            </Box>
        </Grid>
    )
}
export default VideoLogo;