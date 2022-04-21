import{ Routes, Route } from 'react-router-dom';

import Navbar from  "./components/Navbar/Navbar";

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Gallery from "./Pages/Gallery/Gallery"
import Testimonials from './Pages/Testimonials/Testimonials'
import Notfound from './Pages/Notfound/Notfound'


import './app.scss';

function App() {
  return (
    <div className="app">
     <header>
       <Navbar />
       
     </header>

     <main>
       <Routes>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="services" element={<Services />} />
         <Route path="contact" element={<Contact />} />
         <Route path="gallery" element={<Gallery />} />
         <Route path="testimonials" element={<Testimonials />} />
         <Route path="*" element={<Notfound />} />
       </Routes>
     </main>
    </div>
  );
}

export default App;
