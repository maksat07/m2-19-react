import{ Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
// import Navbar from  "./components/Navbar/Navbar";
import { Home, About, Blog, Contact, Notfound } from "./Pages"


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
         <Route path="blog" element={<Blog />} />
         <Route path="contact" element={<Contact />} />
         {/* <Route path="gallery" element={<Gallery />} />
         <Route path="testimonials" element={<Testimonials />} /> */}
         <Route path="*" element={<Notfound />} />
       </Routes>
     </main>
     <footer>
       {/* <Footer /> */}
     </footer>
    </div>
  );
}

export default App;
