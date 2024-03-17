import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <div className="xl:container mx-auto px-3 md:px-10  mt-24">
      <div className="mb-32 flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 gap-10">
        <div>
          <div className="flex  gap-4 md:gap-8 justify-start">
            <div className="w-[300px] h-[400px] overflow-hidden rounded-sm">
              <LazyLoadImage
                effect="blur"
                src="https://picsum.photos/300/400"
                alt="photo"
                className="hover:scale-125 hover:rotate-[5deg] duration-500  transition-all ease-in-out w-full h-full"
                height={400}
              />
            </div>
            <div className="w-[300px] h-[400px] overflow-hidden rounded-sm">
              <LazyLoadImage
                effect="blur"
                src="https://picsum.photos/300/400"
                alt="photo"
                className="hover:scale-125 hover:rotate-[5deg] duration-500 transition-all ease-in-out w-full h-full"
                height={400}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-end">
            <span className="block w-8 h-[2px] bg-blue-400 mb-3"></span>
            <h2 className="text-blue-500 text-lg dark:text-slate-200">
              BIR SO&apos;Z BILAN AYTGANDA
            </h2>
          </div>
          <h3 className="text-4xl font-semibold text-blue-400 tracking-[1px] dark:text-slate-300 my-4 ">
            BIZ HAQIMIZDA
          </h3>
          <p className="my-4 md:max-w-[90%]">
            Har bir yirik kompaniya faqatgina o&apos;ziga emas, balki yonida
            yelkadosh bo&apos;lgan hamda ishonganlarga minnatdorchilik
            bildirishi lozim. Axir, bizning ishda eng muhim prinsip - bu
            ishonch.
          </p>
          <p className="mb-6 md:max-w-[90%]">
            Ishonch nafaqat mijoz va hamkorlar sadoqatini ta&apos;minlaydi,
            qolversa, o&apos;zimizga bo&apos;lgan talabchanligimizni oshiradi.
            Biz uzoq yillik insoniylik an&apos;analari ustiga qurilgan
            munosabatlar asosida hamkorlik qilamiz.
          </p>

          <div className=" flex items-center gap-8">
            <div className="flex items-center gap-1">
              <span className="block mt-1 text-5xl">
                <ion-icon name="flash-outline"></ion-icon>
              </span>
              <p className="max-w-[100px]">Tezkor yechimlar</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="block mt-1 text-5xl">
                <ion-icon name="key-outline"></ion-icon>
              </span>
              <p className="max-w-[100px]">Takrorlanmas loyihalar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
