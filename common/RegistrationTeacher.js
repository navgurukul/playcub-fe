import * as React from 'react';
import {Dialog,Button,Box,Typography} from '@mui/material';
import Form from '../pages/TeacherReg'
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";
import PopupCardWithModel from './Popup';


export default function ScrollDialog() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [successMessage,setSuccessMessage]=React.useState(false)
  
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);
    React.useEffect(()=>{

    },[successMessage])
  
    return (
      <div>
          <PopupCardWithModel 
          // open={value.fetching.success}
          open={successMessage}
          >
          <Typography variant="body1">
          Thank you for interest in teaching with Playcub. We will reach you within 24 hours.
          </Typography>
        </PopupCardWithModel>

         <Box
          sx={{
              display: "grid",                                                                                                         
          }}
          width={isActive?"100%":"238px"}
          >
            <Button 
              onClick={handleClickOpen('body')} 
              sx={{mt:4}}>
                Join Our Teaching Pool
            </Button>

          </Box>
        
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
            <Form handleSuccessMessageOpen={()=>{
      setSuccessMessage(true)
      }} handleClose={()=>handleClose()}/>
        </Dialog>
      </div>
    );
  }
  

                          