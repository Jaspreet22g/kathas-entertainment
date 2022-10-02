import Nav from './components/Nav';
import Home from './components/Home';
import Games from './components/Games';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#F1F3F5]">
      <Nav/>
      <Home/>
      <Games/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;