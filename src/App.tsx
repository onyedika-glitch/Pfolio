import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ServicesPage from './pages/ServicesPage'
import TechStackPage from './pages/TechStackPage'
import FullStackArchitecturePage from './pages/FullStackArchitecturePage'
import FintechSystemsPage from './pages/FintechSystemsPage'
import HealthcarePlatformsPage from './pages/HealthcarePlatformsPage'
import AIIntegrationPage from './pages/AIIntegrationPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import YouExtractorCaseStudy from './pages/YouExtractorCaseStudy'
import GigoraNetworkPage from './pages/GigoraNetworkPage'
import DiscountClubCayman from './pages/DiscountClubCaymanCaseStudy'
import UnlimitedHealthcarePage from './pages/UnlimitedHealthcarePage'
import SparksVenturesPage from './pages/SparksVenturesPage'
import SparksEFPPage from './pages/SparksEFPPage'
import SparksFunnelPage from './pages/SparksFunnelPage'
import SadarPropertiesPage from './pages/SadarPropertiesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/tech-stack" element={<TechStackPage />} />
      <Route path="/services/fullstackarchitecture" element={<FullStackArchitecturePage />} />
      <Route path="/services/fintechsystems" element={<FintechSystemsPage />} />
      <Route path="/services/healthcareplatforms" element={<HealthcarePlatformsPage />} />
      <Route path="/services/aiintegration" element={<AIIntegrationPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work/youextractor" element={<YouExtractorCaseStudy />} />
      <Route path="/work/gigora-network" element={<GigoraNetworkPage />} />
      <Route path="/work/discount-club-cayman" element={<DiscountClubCayman />} />
      <Route path="/work/unlimited-healthcare" element={<UnlimitedHealthcarePage />} />
      <Route path="/work/sparks-ventures" element={<SparksVenturesPage />} />
      <Route path="/work/sparks-efp" element={<SparksEFPPage />} />
      <Route path="/work/sparks-funnel" element={<SparksFunnelPage />} />
      <Route path="/work/sadar-properties" element={<SadarPropertiesPage />} />
    </Routes>
  )
}
