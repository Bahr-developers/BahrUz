import About from "../components/About";
import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partfolio from "../components/Partfolio";
import Partner from "../components/Partner";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Header/>
      <div className="xl:container px-10 mx-auto">
        <Hero />
        <About />
        <Partfolio/>
        <Partner />
        <Services />
        <Careers />  
      </div>
      <Footer/>
    </>
  );
}

export default Home;
