import Footer from "../components/Footer";
import Header from "../components/Header";
import ParfolioCard from "../components/ParfolioCard";

function Portfolio({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="xl:container px-3 md:px-10 mx-auto">
        <h2 className="text-[30px] md:text-[55px] font-bold">PORTFOLIO</h2>
        <div className="partfolio-sort text-[14px] w-[80%] md:text-[19px] xl:text-[25px] md:w-[75%] xl:w-[45%] flex justify-between gap-1 md:gap-3 mt-2">
            <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-sky-400 hover:border-sky-400">
              Brending
            </button>
            <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-sky-400 hover:border-sky-400">
              Mobile app
            </button>
            <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-sky-400 hover:border-sky-400">
              CRM
            </button>
            <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-sky-400 hover:border-sky-400">
              Website
            </button>
        </div>
        <div className="portfolio-page-wrap overflow-hidden grid md:grid-cols-2 xl:grid-cols-3 md:justify-between gap-10 mt-7">
          <ParfolioCard/>
          <ParfolioCard/>
          <ParfolioCard/>
          <ParfolioCard/>
          <ParfolioCard/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
