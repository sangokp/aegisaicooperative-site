import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@aegis/theme';
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
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './index.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="aegis-cooperative-theme">
      <Router>
        <div className="min-h-screen flex flex-col bg-[var(--aegis-void)] text-[var(--aegis-text-primary)] transition-colors duration-500">
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
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
