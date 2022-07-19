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
        height:'16px',
        width:'16px',
        '&:hover': {
            // background: "#FFCC00",
            background: "#FFF5CC",
          }
    }
    
    
    
  }));
  
  export default Styles;