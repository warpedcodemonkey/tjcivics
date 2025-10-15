import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import JoinUs from './pages/membership/JoinUs';
import BusinessMembers from './pages/membership/BusinessMembers';
import CommunityMembers from './pages/membership/CommunityMembers';
import Pricing from './pages/rentals/Pricing';
import PlanEvent from './pages/rentals/PlanEvent';
import RentalAgreement from './pages/rentals/RentalAgreement';
import MakePayment from './pages/rentals/MakePayment';
import Calendar from './pages/Calendar';
import ContactUs from './pages/about/ContactUs';
import Board from './pages/about/Board';
import Sponsor from './pages/about/Sponsor';
import Volunteers from './pages/about/Volunteers';
import Forms from './pages/about/Forms';
import PresidentMessage from './pages/president/PresidentMessage';
import History from './pages/president/History';
import Directory from './pages/president/Directory';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Membership Routes */}
          <Route path="/membership/join" element={<JoinUs />} />
          <Route path="/membership/business" element={<BusinessMembers />} />
          <Route path="/membership/community" element={<CommunityMembers />} />

          {/* Rentals Routes */}
          <Route path="/rentals/pricing" element={<Pricing />} />
          <Route path="/rentals/plan-event" element={<PlanEvent />} />
          <Route path="/rentals/agreement" element={<RentalAgreement />} />
          <Route path="/rentals/payment" element={<MakePayment />} />

          {/* Calendar */}
          <Route path="/calendar" element={<Calendar />} />

          {/* About Routes */}
          <Route path="/about/contact" element={<ContactUs />} />
          <Route path="/about/board" element={<Board />} />
          <Route path="/about/sponsor" element={<Sponsor />} />
          <Route path="/about/volunteers" element={<Volunteers />} />
          <Route path="/about/forms" element={<Forms />} />

          {/* President Routes */}
          <Route path="/president/message" element={<PresidentMessage />} />
          <Route path="/president/history" element={<History />} />
          <Route path="/president/directory" element={<Directory />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
