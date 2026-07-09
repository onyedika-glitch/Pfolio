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
import CareMandate from './pages/CareMandateCaseStudy'
import ILearnova from './pages/ILearnovaCaseStudy'
import Placebet247 from './pages/Placebet247CaseStudy'
import RemainingWork from './pages/RemainingWork'
import DiscountClubCayman from './pages/DiscountClubCaymanCaseStudy'
import ChefAcademy from './pages/ChefAcademyCaseStudy'
import FloorhostingPage from './pages/FloorhostingPage'
import HandymanNGPage from './pages/HandymanNGPage'
import EPortalPage from './pages/EPortalPage'
import PensionAppPage from './pages/PensionAppPage'
import ATOMGroupPage from './pages/ATOMGroupPage'
import ZentrixEquityPage from './pages/ZentrixEquityPage'
import UnlimitedHealthcarePage from './pages/UnlimitedHealthcarePage'
import SparksVenturesPage from './pages/SparksVenturesPage'
import ANINGPage from './pages/ANINGPage'
import SadarPropertiesPage from './pages/SadarPropertiesPage'
import SelfanyPage from './pages/SelfanyPage'
import SPortalPage from './pages/SPortalPage'
import StudentBoardPage from './pages/StudentBoardPage'
import RestaurantUIPage from './pages/RestaurantUIPage'

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
      <Route path="/work/caremandate" element={<CareMandate />} />
      <Route path="/work/ilearnova" element={<ILearnova />} />
      <Route path="/work/placebet247" element={<Placebet247 />} />
      <Route path="/work/more" element={<RemainingWork />} />
      <Route path="/work/discount-club-cayman" element={<DiscountClubCayman />} />
      <Route path="/work/chef-academy" element={<ChefAcademy />} />
      <Route path="/work/floorhosting" element={<FloorhostingPage />} />
      <Route path="/work/handyman-ng" element={<HandymanNGPage />} />
      <Route path="/work/eportal" element={<EPortalPage />} />
      <Route path="/work/pension-app" element={<PensionAppPage />} />
      <Route path="/work/atom-group" element={<ATOMGroupPage />} />
      <Route path="/work/zentrix-equity" element={<ZentrixEquityPage />} />
      <Route path="/work/unlimited-healthcare" element={<UnlimitedHealthcarePage />} />
      <Route path="/work/sparks-ventures" element={<SparksVenturesPage />} />
      <Route path="/work/aning" element={<ANINGPage />} />
      <Route path="/work/sadar-properties" element={<SadarPropertiesPage />} />
      <Route path="/work/selfany" element={<SelfanyPage />} />
      <Route path="/work/sportal" element={<SPortalPage />} />
      <Route path="/work/student-board" element={<StudentBoardPage />} />
      <Route path="/work/restaurant-ui" element={<RestaurantUIPage />} />
    </Routes>
  )
}
