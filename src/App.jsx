import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BentoPage from "./components/BentoPage";
function App() {
  return (
    <>
      <Navbar />
      <section className="hero min-h-screen">
        <Hero/>
      </section>
      <section className="bento min-h-screen">
        <BentoPage/>
      </section>
      <section className="placements min-h-screen bg-amber-300"></section>
      <section className="contact min-h-screen bg-blue-300"></section>
      <Footer />
    </>
  );
}

export default App;
