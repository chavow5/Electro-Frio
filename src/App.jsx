import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FormularioTrabajoTecnico from './components/FormularioTrabajoTecnico.jsx';
import FormularioTrabajoTecnicoWord from './components/FormularioTrabajoTecnicoWord.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Agrega las rutas */}
        <Route path="/" element={<Home />} />
        <Route path="/formulariotrabajotecnico" element={<FormularioTrabajoTecnico />} />
        <Route path="/formulariotrabajotecnicoword" element={<FormularioTrabajoTecnicoWord />} />
      </Routes>
      {/* prueba formulario en pagina de inicio, despues cambiarlo a una pagina */}
      <FormularioTrabajoTecnico/>
      <Footer />
    </Router>
  );
}

export default App;