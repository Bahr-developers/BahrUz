import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HeroTitle } from "../utils/links";

function Hero({ language }) {
  const [text] = useTypewriter({
    words: ["Norm Developers", "Simple Developers", "Modern Developers"],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  return (
    <div className="h-screen w-screen flex items-center px-3 md:px-10  justify-center hero__bg">
      <div>
        <h1 className="text-5xl sm:text-7xl mb-12 dark:text-white text-left md:text-center">
          {text}
          <Cursor />
        </h1>
        <p className="max-w-[500px] w-full text-lg text-left md:text-center md:mx-auto mb-12 dark:text-white md:text-2xl tracking-[1px] leading-loose">
          {HeroTitle[language]}
        </p>
        <div className="flex items-center gap-10 md:justify-center">
          <Link
            className="bg-sky-500 text-white flex items-center gap-3 border-sky-400 border-[2px] rounded-md  group dark:bg-slate-600 dark:border-slate-500  py-1 px-2 md:py-2 md:px-4"
            to={"/portfolio"}
          >
            <span className="block text-[18px]">Portfolio</span>
            <span className="text-white block text-2xl pt-2 rotate-[30deg] group-hover:scale-110  duration-200">
              <ion-icon name="arrow-up-circle"></ion-icon>
            </span>
          </Link>
          <Link
            to="tel:+998936221907"
            className="bg-sky-500 text-white flex items-center gap-3 border-sky-400 border-[2px] rounded-md py-1 px-2 md:py-2 md:px-4 group dark:bg-slate-600 dark:border-slate-500"
          >
            <span className="text-[18px]">Qo&apos;ng&apos;iroq</span>
            <span className="pt-2 block text-2xl group-hover:scale-110 duration-200">
              <ion-icon name="call-outline"></ion-icon>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
