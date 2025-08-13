import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipos from './pages/Equipos';
import About, { AboutUs } from './pages/AboutUs';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FormularioTrabajoTecnico from './pages/FormularioTrabajoTecnico.jsx';
import Servicios from './pages/Servicios.jsx';
import GaleriaTrabajo from './pages/GaleriaTrabajo.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Agrega las rutas */}
        <Route path="/" element={<Home />} />
        <Route path="/formulariotrabajotecnico" element={<FormularioTrabajoTecnico />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<GaleriaTrabajo />} />
        <Route path="/sobrenosotros" element={<AboutUs />} />
        
      </Routes>
      {/* pruebas en pagina de inicio, despues cambiarlo a una ruta */}
      <FormularioTrabajoTecnico/>
      <Equipos/>
      <Servicios/>
      <GaleriaTrabajo/>
      <AboutUs/>
      <Footer />
    </Router>
  );
}

export default App;