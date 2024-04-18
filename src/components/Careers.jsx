import { useState } from "react";
import { useEffect } from "react";
import { careersTitle } from "../utils/links";
import { useCareer } from "../Query";

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
    const stickyClass = scrollTop >= 50 ? " block" : " hidden";
    setTop(stickyClass);
  };

  const handleTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const getCareer = useCareer();

  return (
    <div>
      <div
        className="xl:container mx-auto px-3 md:px-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="footer-inner dark:bg-transparent">
          <div className="join-us block md:flex   gap-2 items-center border rounded-xl p-5 md:p-10 py-8 md:py-8 ">
            <div className="join-us-text  w-[100%] md:w-[60%]">
              <h2 className="md:text-[30px] lg:text-[45px] text-[25px] font-black text-blue-400 dark:text-slate-200">
                {careersTitle[language].title}
              </h2>
              <p className="md:text-[20px] text-gray-400 dark:text-slate-100 lg:text-[25px] mt-2 text-[15px]  font-medium">
                {careersTitle[language].subtitle}
              </p>
            </div>
            <div className="join-us-jobs mt-5 md:mt-0">
              {getCareer.data?.data.length &&
                getCareer.data?.data.map((career) => (
                  <div
                    className="joib-own w-[100%] flex items-center gap-4 mt-2"
                    key={career.id}
                  >
                    <span className="block w-7 md:w-10 mt-[5px]  h-[3px] bg-gray-500 rounded-xl dark:bg-white"></span>
                    <p className="md:text-[23px] text-gray-400 dark:text-slate-200 lg:text-[28px] text-[18px] font-bold">
                      {career.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="footer-nav flex justify-between mt-10">
            <button
              onClick={handleTop}
              className={
                "border-sky-400  border-[2px] rounded-full w-14 h-14  ml-auto fixed bottom-[-40px] right-5 " +
                top
              }
            >
              <span className="text-2xl flex justify-center text-sky-400  dark:text-white">
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
