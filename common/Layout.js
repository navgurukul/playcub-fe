import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import Head from 'next/head';


const Layout =({children})=>{
    return(
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <ThemeProvider theme={theme}>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        
        </>
    );
}
export default Layout ;