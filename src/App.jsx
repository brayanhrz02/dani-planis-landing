import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Classes from "./components/Classes";
import Merch from "./components/Merch";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

export default function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <style>{`
        .hero-bg {
          background-position: center;
          background-size: cover;
        }
      `}</style>

                <Header />
                <Hero />
                <Features />
                <Process />
                <Pricing />
                <About />
                <Testimonials />
                <Classes />
                <Merch />
                <Contact />
                <FAQ />
                <CTA />
                <Footer />
        </div>
    );
}