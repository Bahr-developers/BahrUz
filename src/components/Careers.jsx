import { useState } from "react";
import { useEffect } from "react";
import { careersTitle } from "../utils/links";

const Careers = ({ language }) => {
  const [top, setTop] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isTop);
    return () => {
      window.removeEventListener("scroll", isTop);
    };
  }, []);

  const isTop = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "block" : "hidden";
    setTop(stickyClass);
  };

  const handleTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div>
      <div className="xl:container mx-auto px-3 md:px-10">
        <div className="footer-inner dark:bg-transparent">
          <div className="join-us block md:flex   gap-2 items-center border rounded-xl p-5 md:p-10 py-8 md:py-10 ">
            <div className="join-us-text  w-[100%] md:w-[60%]">
              <h2 className="md:text-[30px] lg:text-[53px] text-[25px] font-black">
                {careersTitle[language].title}
              </h2>
              <p className="md:text-[20px] lg:text-[25px] mt-2 text-[15px]  font-medium">
                {careersTitle[language].subtitle}
              </p>
            </div>
            <div className="join-us-jobs mt-5 md:mt-0">
              <div className="joib-own w-[100%] flex items-center gap-4 mt-2">
                <span className="block w-7 md:w-10 mt-[5px]  h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                <p className="md:text-[23px] lg:text-[28px] text-[18px] font-bold">
                  Project manager
                </p>
              </div>
              <div className="joib-own flex items-center gap-4 mt-2">
                <span className="block w-8 md:w-10 mt-[5px] h-[4px] bg-slate-500 rounded-xl dark:bg-white"></span>
                <p className="tmd:text-[23px] lg:text-[28px] text-[18px] font-bold">
                  UI&UX designer
                </p>
              </div>
              <div className="joib-own flex items-center gap-4 mt-2">
                <span className="block w-7 md:w-10 mt-[5px] h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                <p className="md:text-[23px] lg:text-[28px] text-[18px] font-bold">
                  Flutter developer
                </p>
              </div>
              <div className="joib-own flex items-center mt-2 gap-4">
                <span className="block w-7 md:w-10 mt-[5px] h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                <p className="md:text-[23px] lg:text-[28px] text-[18px]  font-bold">
                  Backend developer(NodeJS/NestJS)
                </p>
              </div>
            </div>
          </div>
          <div className="footer-nav flex justify-between mt-10">
            <button
              onClick={handleTop}
              className={
                "border-sky-400  border-[2px] rounded-full w-14 h-14  ml-auto fixed bottom-16 right-5 " +
                top
              }
            >
              <span className=" text-2xl flex justify-center text-sky-400  dark:text-white">
                <ion-icon name="arrow-up"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
