import About from "../components/About";
import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Header language={language} onLanguage={onLanguage} />
      <div className="xl:container px-10 mx-auto">
        <Hero />
        <About />
        <Partner />
        <Services />
        <Careers />  
      </div>
      <Footer language={language} />
    </>
  );
}

export default Home;
