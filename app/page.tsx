import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsDisplay from "./components/ProductsDisplay";
import RecentlyLaunched from "./components/RecentlyLaunched";

/**
 * Home page: full-viewport hero with fixed navbar.
 * Navbar is a client component (mobile menu state);
 * HeroSection is a server component for optimal performance.
 */
export default function Home() {
  return (
    <div className="hero-gradient min-h-screen font-sans">
      <HeroSection />
      <ProductsDisplay />
      <RecentlyLaunched/>
    </div>
  );
}
