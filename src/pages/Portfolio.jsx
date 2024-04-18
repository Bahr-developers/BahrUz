import Footer from "../components/Footer";
import Header from "../components/Header";
import ParfolioCard from "../components/ParfolioCard";
import { useProject } from "../Query";

function Portfolio({ language, setLanguage }) {
  const getProjects = useProject();

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />

      <div className="container  px-3 mx-auto mt-8">
        <div className="mb-28 partfolio">
          <div className="partfolia-head md:flex justify-between items-center">
            <h1 className="font-bold text-[45px] text-blue-400 dark:text-slate-300 ">
              Portfolio
            </h1>
            {/* <div className="partfolio-sort flex justify-between gap-1 md:gap-3 mt-2">
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
            </div> */}
          </div>
          <div className="overflow-hidden grid md:grid-cols-2 xl:grid-cols-3 md:justify-between gap-10 mt-7">
            {getProjects.data?.data.length &&
              getProjects.data?.data.map((project) => (
                <ParfolioCard
                  key={project.id}
                  images={project.image_urls}
                  name={project.name}
                  url={project.url}
                  type={project.type}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
