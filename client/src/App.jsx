import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Coaches from "./pages/Coaches";
import Athletes from "./pages/Athletes";
import Schedule from "./pages/Schedule";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Magazine from "./pages/Magazine";
import MagazineStories from "./pages/MagazineStories";

// Admin pages
import AdminLogin from "./admin/Login";
import AdminDashboard from "./admin/Dashboard";
import DonationsPage from "./admin/DonationPage";
import EventsPage from "./admin/EventsPage";
import RegistrationsPage from "./admin/RegistrationsPage";
import MessagesPage from "./admin/MessagesPage";
import AthletesPage from "./admin/AthletesPage";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/magazine/stories" element={<MagazineStories />} />
      </Route>

      {/* Admin login  */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin routes */}
      <Route element={<AdminLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/donations" element={<DonationsPage />} />
          <Route path="/admin/events" element={<EventsPage />} />
          <Route path="/admin/registrations" element={<RegistrationsPage />} />
          <Route path="/admin/messages" element={<MessagesPage />} />
          <Route path="/admin/athletes" element={<AthletesPage />} />
        </Route>
      </Route>
    </Routes>
  );
}