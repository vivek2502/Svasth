import { StatusBar } from 'expo-status-bar';
import Testinomial from './Compo/Testinomial/Testinomial.js';
import Services from './Compo/Services/Services.js';
import { NativeBaseProvider } from 'native-base';
import Navbar from './Compo/Navbar.js';
import Footer from './Compo/Footer.js';
import Quotes from './Compo/Quotes/Quotes.js';
import Banner from './Compo/Banner/Banner.js';
import Blockchain from './Compo/Blockchain/Blockchain.js';

export default function App() {
  return (
    <NativeBaseProvider>
        <Navbar/>
        <Banner />
        <Quotes/>
        <Services/>
        <Blockchain/>
        
        <Testinomial/>
        <Footer/>
    </NativeBaseProvider >
  );
}