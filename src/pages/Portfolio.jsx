import Footer from "../components/Footer";
import Header from "../components/Header";

function Portfolio({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="xl:container px-10 mx-auto">Portfolio</div>
      <Footer />
    </>
  );
}

export default Portfolio;
