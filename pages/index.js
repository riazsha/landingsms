import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';

import SpecialOffer from '../components/special-offer';
import Herobanner from '../components/herobanner';
import Whyus from '../components/whybulksms';
import Footer from '../components/footer';
import States from '../components/states';
export default function Homepage() {
    return (
      <>
      <SpecialOffer/>
      <Herobanner/>
      <Whyus/>
      <States/>
      <Footer/>
      </>
    )
  }