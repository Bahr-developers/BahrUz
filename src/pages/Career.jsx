import Footer from "../components/Footer";
import Header from "../components/Header";

function Career({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="xl:container px-10 mx-auto">Careekr</div>
      <Footer />
    </>
  );
}

export default Career;
