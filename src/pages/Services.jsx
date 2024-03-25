import Footer from "../components/Footer";
import Header from "../components/Header";

function Services({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
        <div className="xl:container px-10 mx-auto">Services</div>
      <Footer />
    </>
  );
}

export default Services;
