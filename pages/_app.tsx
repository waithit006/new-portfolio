// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.scss'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {

  const [classNavbar, setClassNavbar] = useState("")

  useEffect(() => {
    AOS.init();

    window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
        setClassNavbar("isScroll");
    } else {
        setClassNavbar("");
    }

  }

  return (
    <>
      <style global jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          // div#__next > div {
          //   height: 100%;
          // }

          .container {
            z-index:2;
          }
        `}
      </style>
      <style jsx>{
        `
      video {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: -1;
        min-width: 100%;
        min-height: 100%;
      }

      .backgroundCover{
        content: '';
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(44, 51, 64, 0.8);
      }
      `
      }
      </style>

      {/* <video autoPlay={true} loop={true}>
        <source src={"/background-video.mp4"} type="video/mp4" />
      </video> */}
      <Navbar className={classNavbar} />
      {/* <Container> */}
      <Component {...pageProps} />
      {/* </Container> */}
      {/* <div className="backgroundCover"></div> */}

    </>)
}


export default MyApp