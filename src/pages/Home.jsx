
import Footer from "../components/Footer";
import Header from "../components/Header";

<<<<<<< HEAD
function Home() {
  return (
    <>
      <Header />
      <div className="xl:container px-10 mx-auto">Home</div>
    </>
  );
=======
function Home({language, onLanguage}) {
  return <>
        <Header language={language} onLanguage={onLanguage} />
        <div className="xl:container px-10 mx-auto">
          
        </div>
        <Footer language={language}/>
          </>;
>>>>>>> origin/diyorbek
}

export default Home;
