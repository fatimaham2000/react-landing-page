import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from "./Components/Home";
import Testimonial from './Components/Testimonial';
import Work from "./Components/Work";
function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
