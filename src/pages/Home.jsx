import Footer from "../components/Footer";
import Header from "../components/Header";

function Home({ language, onLanguage }) {
  return (
    <>
      <Header language={language} onLanguage={onLanguage} />
      <div className="xl:container px-10 mx-auto">Home page</div>
      <Footer language={language} />
    </>
  );
}

export default Home;
