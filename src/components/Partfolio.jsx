import ParfolioCard from "./ParfolioCard";

const Partfolio = () => {
    return (
        <div className="mb-64 partfolio">
            <div className="partfolia-head md:flex justify-between items-center">
                <h1 className="font-bold text-[45px]">Partfolio</h1>
                <div className="partfolio-sort flex justify-between gap-1 md:gap-3 mt-2">
                    <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-[#0D9276] hover:border-[#0D9276]">Brending</button>
                    <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-[#0D9276] hover:border-[#0D9276]">Mobile app</button>
                    <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-[#0D9276] hover:border-[#0D9276]">CRM</button>
                    <button className="btn border p-1 md:px-3 rounded-md dark:bg-transparent hover:text-[#0D9276] hover:border-[#0D9276]">Website</button>
                </div>
            </div>
            <div className="partfolio-content mt-4">
                <ParfolioCard width={150}/>
            </div>
        </div>
    );
};

export default Partfolio;