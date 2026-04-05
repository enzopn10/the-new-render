import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesHub } from './pages/ServicesHub';
import { ServicePage } from './pages/ServicePage';
import { Portfolio } from './pages/Portfolio';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { DynamicPage } from './pages/DynamicPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<DynamicPage type="location" />} />
          <Route path="/solutions/:slug" element={<DynamicPage type="solution" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
