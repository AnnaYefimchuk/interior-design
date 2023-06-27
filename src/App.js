import logo from './logo.svg';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import RoutesRMC from './components/routes/RoutesRMC.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesRMC />
      <Footer />
    </div>
  );
}

export default App;
