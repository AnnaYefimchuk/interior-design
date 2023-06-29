
import Header from './components/header/Header.js';
import Navbar from './components/navbar/Navbar.js';
import Backdrop from './components/navbar/Backdrop.js';
import Footer from './components/footer/Footer.js';
import RoutesRMC from './components/routes/RoutesRMC.js';
import './App.css';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }


  return (
    <div className="App">
      <Header click={handleClick} />
      <Backdrop click={handleClick} open={open} />
      <Navbar click={handleClick} open={open} />

      <RoutesRMC />
      <Footer />
    </div>
  );
}

export default App;
