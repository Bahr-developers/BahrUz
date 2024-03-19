import ParfolioCard from "./ParfolioCard";

const Partfolio = ({ language }) => {
  return (
    <div className="container mx-auto px-3 md:px-10">
      <div className="mb-28 partfolio">
        <div className="partfolia-head md:flex justify-between items-center">
          <h1 className="font-bold text-[45px] text-blue-400 dark:text-slate-300 ">
            Portfolio
          </h1>
          <div className="partfolio-sort flex justify-between gap-1 md:gap-3 mt-2">
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
        </div>
        <div className="overflow-hidden grid md:grid-cols-2 xl:grid-cols-3 md:justify-between gap-10 mt-7">
          <ParfolioCard />
          <ParfolioCard />
          <ParfolioCard />
          <ParfolioCard />
          <ParfolioCard />
          <ParfolioCard />
        </div>
      </div>
    </div>
  );
};

export default Partfolio;
