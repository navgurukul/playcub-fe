import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

const Footer =()=>{
    return(
        <>
            <Paper sx={{ position: 'fixed',height:90, bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                showLabels
                >
                
                </BottomNavigation>
        </Paper>
        </>
    )
}
export default Footer;