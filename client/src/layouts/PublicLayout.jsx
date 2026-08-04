import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-white">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Prevents content overlap under fixed navbar */}
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}