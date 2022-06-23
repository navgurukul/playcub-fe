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
            <link  rel="icon" href="/Playcub-1.ico" type="image/x-icon"/>
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