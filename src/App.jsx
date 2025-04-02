import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bento_placement from "./components/Bento_placement";  

function App() {
  return (
    <>
      <Navbar />
      <section className="hero min-h-screen bg-red-300"></section>
      <section className="bento min-h-screen bg-green-300"></section>
      <Bento_placement />
      <section className="contact min-h-screen bg-blue-300"></section>
      <Footer />
    </>
  );
}

export default App;
