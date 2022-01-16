import './App.css';
import Banner from './components/Banner';
import BestProduct from './components/BestProduct';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import HappenedsIssue from './components/HappenedsIssue';
import Navbar from './components/Navbar';
import Production from './components/Production';
import ProductPage from './components/ProductPage';
import WhatHappened from './components/WhatHappened';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Banner />
      <Production/>
      <BestProduct />
      <ProductPage />
      <BrandStory />
      <HappenedsIssue/>
      <WhatHappened/>
      <Footer/>
    </>
  );
}

export default App;
