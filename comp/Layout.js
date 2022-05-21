import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

const Layout =({children})=>{
    return(
        <>
        <ThemeProvider theme={theme}>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        
        </>
    );
}
export default Layout ;