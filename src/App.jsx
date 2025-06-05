import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FormularioTrabajoTecnico from './components/FormularioTrabajoTecnico.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Agrega las rutas */}
        <Route path="/" element={<Home />} />
        <Route path="/FormularioTrabajoTecnico" element={<FormularioTrabajoTecnico />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;