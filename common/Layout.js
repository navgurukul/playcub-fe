import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import Head from 'next/head';
import style from '../styles/styles'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react';
const Layout =({children})=>{
    const classes = style()
    const [windowSize,setWindowSize] = useState({
        windowSize: undefined,
        bodyScrollHeight: undefined,
    })
    useEffect(()=> {
       
            setWindowSize({
                windowSize: window.innerHeight,
                bodyScrollHeight: document.body.scrollHeight,
            })
     }, [])
    return(
        <>
        <Head>
            <title> PlayCub</title>
            <meta name="description" content="Interactive Coding Classes for Kids. Teach your kids how to build websites with fun. Private 1-1 classes"></meta>
            <link  rel="apple-touch-icon" sizes="180*180" href="../apple-touch-icon.png"/>

            {/* <link  rel="icon"sizes="32*32" type="image/png" href="../favicon-32*32.png" />
            <link  rel="icon" sizes="16*16" type="image/png" href="../favicon-16*16.png" />
            <link  rel="manifest" href="../site.webmanifest" /> */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <ThemeProvider theme={theme} >
            <Box class={classes.body}>
            <Navbar/>
            {children}
            <Footer height={windowSize}/>
            </Box>
        </ThemeProvider>
        
        </>
    );
}
export default Layout ;