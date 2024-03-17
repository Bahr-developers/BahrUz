import Footer from "../components/Footer";
import Header from "../components/Header";

function About({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="xl:container px-10 mx-auto">Biz haqimizda</div>
      <Footer />
    </>
  );
}

export default About;
