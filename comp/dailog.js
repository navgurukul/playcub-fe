import * as React from 'react';
import {Dialog,Button,Box} from '@mui/material';
import Form from '../pages/TeacherReg'
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../theme/constant";


export default function ScrollDialog() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
  
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
  
    return (
      <div>
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
            <Form/>
        </Dialog>
      </div>
    );
  }
  

                          