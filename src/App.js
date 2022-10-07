import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Games from './components/Games';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="bg-[#F1F3F5]">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Games />
              <About />
              <Contact />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;