import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partfolio from "../components/Partfolio";
import Partner from "../components/Partner";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <div className="container mx-auto px-5 md:px-10">
        <Header />
        <Hero />
        <About />
        <Partfolio/>
        <Partner />
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default Home;
