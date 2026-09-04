import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipos from './pages/Equipos';
import About, { AboutUs } from './pages/AboutUs';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ServiciosPage from './pages/Servicios.jsx';
import GaleriaTrabajo from './pages/GaleriaTrabajo.jsx';

import Servicios from './components/Servicios.jsx';
import Equipo from './components/Equipo.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Contacto from './components/Contacto.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Agrega las rutas */}
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/galeria" element={<GaleriaTrabajo />} />
        <Route path="/sobrenosotros" element={<AboutUs />} />
      </Routes>
      
      {/* Componentes de landing integrados */}
      <Equipo />
      <Servicios />
      <GaleriaTrabajo />
      <AboutUs />
      <Contacto />
      
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;