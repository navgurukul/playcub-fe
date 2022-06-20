import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import Head from 'next/head';


const Layout =({children})=>{
    return(
        <>
        <Head>
            <title> PlayCub</title>
            <meta name="description" content="Interactive Coding Classes for Kids. Teach your kids how to build websites with fun. Private 1-1 classes"></meta>
            <link  rel="shortcut icon" href="/Playcub-1.ico" type="image/x-icon"/>
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