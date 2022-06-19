import {
    Typography,
    Grid,
    Box,
  } from "@mui/material";
import Image from 'next/image'
import Styles from "../styles/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";

const AssignmentsLogo=()=>{
    const classes = Styles();
    const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");


    return(
        <Grid item  display={'flex'} mb={isActive&&"16px"}>
            <Box  >
        
                <Image 
                    
                    src={require("../assest/assigments.png")} 
                    height={"30.54px"}
                    width={'28.67px'}
                    alt="Regular Assignments logo img"   
                
                    />
            </Box>
            <Box sx={{ml:1}}>
                <Typography variant="body1"  mt={0.3} >
                    Assignments
                </Typography>
            </Box>
        </Grid>
    )
}
export default AssignmentsLogo;