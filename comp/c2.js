import {
    Typography,
    Container,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Box,
    Paper,
  } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardStyle from "./cardComponent";

export default ()=>{
    return  <CardStyle>
        <CardContent >
            
            <Typography gutterBottom variant="h4" m={3} component="div">
                Web Development Basic
            </Typography>
            <Typography gutterBottom variant="subtitle1" m={3} component="div">
                Empower your kids to think critically, communicate clearly and build beautiful websites

            </Typography>
            <Box sx={{display:"flex" ,m:3}}>
                <ArrowRightAltIcon sx={{mr:1}}/>
                <Typography variant="subtitle1">
                    20 Classes, 1 hour each
                </Typography>
            </Box>
            <Box sx={{display:"flex",mt:2,m:3}}>   
                <ArrowRightAltIcon sx={{mr:1}} />
                <Typography variant="subtitle1">
                    Assignments and homework after every session
                </Typography>
            </Box>
            <Box sx={{display:"flex",mt:2,m:3}}>
                <ArrowRightAltIcon sx={{mr:1}}/>
                <Typography variant="subtitle1">
                    Solve doubts in and outside the class
                </Typography>
            </Box>
            <Box sx={{display:"flex",mt:2,m:3}}>
                <ArrowRightAltIcon sx={{mr:1}}/>
                <Typography variant="subtitle1">
                    Free access to materials
                </Typography>
            </Box>
            <Box sx={{display:"flex",mt:2,m:3}}>
                <ArrowRightAltIcon sx={{mr:1}}/>
                <Typography variant="subtitle1">
                    HTML
                </Typography>
            </Box>
            <Box sx={{display:"flex",mt:2,m:3}}>
                <ArrowRightAltIcon sx={{mr:1}}/>
                <Typography variant="subtitle1">
                    CSS
                </Typography>
            </Box>
            <Box sx={{display:"flex",mt:2,m:3}}>
                <ArrowRightAltIcon sx={{mr:1}}/>
                <Typography variant="subtitle1">
                    Javascript
                </Typography>
            </Box>
            <Box sx={{display:"flex",ml:3}}>
                <CurrencyRupeeIcon  sx={{mt:0.2,height:45}}/>
                <Typography variant="subtitle">
                    120 / week
                </Typography>
                
            </Box>
            <Box>
                <Typography variant="subtitle1" sx={{ml:4}} >
                    20 Classes
                </Typography>
            </Box>
            
            
        </CardContent>
        <CardActions >
        </CardActions>
    </CardStyle>
}