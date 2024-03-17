import About from "../components/About";
import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partfolio from "../components/Partfolio";
import Partner from "../components/Partner";
import Services from "../components/Services";

function Home({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Partfolio />
      <Partner />
      <Services />
      <Careers />
      <Footer />
    </>
  );
}

export default Home;
