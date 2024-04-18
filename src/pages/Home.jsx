import About from "../components/About";
import Careers from "../components/Careers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partfolio from "../components/Partfolio";
import Partner from "../components/Partner";
import Services from "../components/Services";
import { useLanguage } from "../Query";

function Home({ language, setLanguage }) {
  const getLanguage = useLanguage();

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Partfolio language={language} />
      <Partner language={language} />
      <Services language={language} />
      <Careers language={language} />
      <Footer />
    </>
  );
}

export default Home;
