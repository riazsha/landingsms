import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../scss/style.scss";

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';
import SpecialOffer from '../components/special-offer';
import Herobanner from '../components/herobanner';
import Whyus from '../components/whybulksms';
import Footer from '../components/footer';
import States from '../components/states';
import Navbar from '../components/navbar';
import Features from '../components/features';
export default function Homepage({ component, pageprops }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <SpecialOffer  />
      <Navbar />
      <Herobanner />
      <Whyus {...pageprops} />
      <States {...pageprops} />
      <Features/>
      <Footer />
    </>
  )
}