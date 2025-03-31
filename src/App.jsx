import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all logos and put them in the companyLogos
import GoogleLogo from "./assets/google.png";
const companyLogos = Array(20).fill(GoogleLogo);

function App() {
  return (
    <>
      <Navbar />
      <section className="hero min-h-screen bg-red-300"></section>
      <section className="bento mx-auto bg-green-800 py-8">
        <h1 className="text-3xl px-10">Our Alumni At</h1>
        <div className="grid grid-cols-4 p-10">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-white"
            >
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="h-20"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="placements min-h-screen bg-amber-300"></section>
      <section className="contact min-h-screen bg-blue-300"></section>
      <Footer />
    </>
  );
}

export default App;
