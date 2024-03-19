import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AboutTitle } from "../utils/links";

import photo1 from "../assets/photo1.avif";
import photo2 from "../assets/photo2.avif";

const About = ({ language }) => {
  return (
    <div className="xl:container mx-auto px-3 md:px-10  mt-24">
      <div className="mb-32 flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 gap-10">
        <div data-aos="fade-right">
          <div className="flex  gap-4 md:gap-8 justify-start">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-sm">
              <LazyLoadImage
                effect="blur"
                src={photo1}
                alt="photo"
                className="hover:scale-125 hover:rotate-[5deg] duration-500  transition-all ease-in-out w-[300px] h-[400px]"
                height={400}
              />
            </div>
            <div className="w-[300px] h-[400px] overflow-hidden rounded-sm">
              <LazyLoadImage
                effect="blur"
                src={photo2}
                className="hover:scale-125 w-[300px] h-[400px] hover:rotate-[5deg] duration-500 transition-all ease-in-out"
                height={400}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="flex gap-1 items-end">
            <span className="block w-8 h-[2px] bg-blue-400 mb-3"></span>
            <h2 className="text-blue-500 text-lg dark:text-slate-200">
              {AboutTitle[language].subtitle}
            </h2>
          </div>
          <h3 className="text-4xl font-semibold text-blue-400 tracking-[1px] dark:text-slate-300 my-4 ">
            {AboutTitle[language].title}
          </h3>
          <p className="my-4 md:max-w-[90%]">{AboutTitle[language].title1}</p>
          <p className="mb-6 md:max-w-[90%]">{AboutTitle[language].title2}</p>

          <div className=" flex items-center gap-8">
            <div className="flex items-center gap-1">
              <span className="block mt-1 text-5xl">
                <ion-icon name="flash-outline"></ion-icon>
              </span>
              <p className="max-w-[100px]">{AboutTitle[language].key1}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="block mt-1 text-5xl">
                <ion-icon name="key-outline"></ion-icon>
              </span>
              <p className="max-w-[100px]">{AboutTitle[language].key2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
