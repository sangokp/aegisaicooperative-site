import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import TeamMember from './pages/TeamMember';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Arizona from './pages/Arizona';
import OcaDemo from './pages/OcaDemo';
import OcaPhoenixDemo from './pages/OcaPhoenixDemo';
import './index.css';

function ExternalRedirect({ to }) {
  window.location.href = to;
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--aegis-void)] text-[var(--aegis-text-primary)]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamMember />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/arizona" element={<Arizona />} />
            <Route path="/oca-demo" element={<OcaDemo />} />
            <Route path="/oca-phoenix" element={<OcaPhoenixDemo />} />
            <Route path="/cmmc" element={<ExternalRedirect to="https://aegisos.ai/docs/cmmc" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
