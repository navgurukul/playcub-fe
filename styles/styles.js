import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => ({
    
    Icons:{
        height:'32px',
        width:'32px',

    },
    visionImg:{
        height:"507px",
        width:"544px",
    },
    visionImg1:{
        height:"507px",
        width:"102%",
        
    },
    closeIcon:{
        height:'32px',
        width:'32px',
        '&:hover': {
            background: "#FFF5CC",
          }
    },
    closeIcon1:{
        height:'25px',
        width:'25px',
        '&:hover': {
            // background: "#FFCC00",
            background: "#FFF5CC",
          }
    },
    link:{
        color:' #2E2E2E',
        textDecoration:"none"
    }
    
    
    
  }));
  
  export default Styles;