import "../styles/globals.css";
import "../styles/global.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "./layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Trigger animation only once
      offset: 120,    // Adjust offset to reduce animation triggers
    });
  
    // Refresh AOS on DOM updates
    return () => {
      AOS.refresh();
    };
  }, []);

  return <Layout><Component {...pageProps} /></Layout>
}
