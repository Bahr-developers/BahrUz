import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mx-auto my-32 px-5 md:px-10">
      <div>
        <h1 className="text-5xl mb-8 dark:text-white text-left md:text-center">
          Modern Developers
        </h1>
        <p className="max-w-[500px] w-full text-left md:text-center md:mx-auto mb-8 dark:text-white md:text-xl">
          Bizning jamoamiz bu sohada professionallardir saytlar va mobil
          ilovalarni ishlab chiqish, saytlar, ijtimoiy tarmoqlar va video
          taqdimotlarni ilgari surish. o'z ishini sevadiganlar!
        </p>
        <div className="flex items-center gap-10 md:justify-center">
          <Link className="bg-sky-500 text-white flex items-center gap-3 border-sky-400 border-[2px] rounded-md  group dark:bg-slate-600 dark:border-slate-500  py-1 px-2 md:py-2 md:px-4">
            <span className="block text-[18px]">Portfolio</span>
            <span className="text-white block text-2xl pt-2 rotate-[30deg] group-hover:scale-110  duration-200">
              <ion-icon name="arrow-up-circle"></ion-icon>
            </span>
          </Link>
          <Link
            to="tel:+998936221907"
            className="bg-sky-500 text-white flex items-center gap-3 border-sky-400 border-[2px] rounded-md py-1 px-2 md:py-2 md:px-4 group dark:bg-slate-600 dark:border-slate-500"
          >
            <span className="text-[18px]">Qo'ng'iroq</span>
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
