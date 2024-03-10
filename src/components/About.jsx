const About = () => {
  return (
    <div className="mb-32 flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 gap-10">
      <div>
        <div className="flex  gap-4 md:gap-8 justify-center xl:justify-start">
          <div className="w-[300px] h-[400px] overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/300/400"
              alt="photo"
              className="hover:scale-125 hover:rotate-[5deg] duration-200 w-full h-full"
            />
          </div>
          <div className="w-[300px] h-[400px] overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/300/400"
              alt="photo"
              className="hover:scale-125 hover:rotate-[5deg] duration-200 w-full h-full"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-end">
          <span className="block w-8 h-[2px] bg-blue-400 mb-3"></span>
          <h2 className="text-blue-500 text-lg dark:text-slate-200">
            BIR SO'Z BILAN AYTGANDA
          </h2>
        </div>
        <h3 className="text-4xl font-semibold text-blue-400 tracking-[1px] dark:text-slate-300 my-4 ">
          BIZ HAQIMIZDA
        </h3>
        <p className="my-4">
          Har bir yirik kompaniya faqatgina oʻziga emas, balki yonida yelkadosh
          boʻlgan hamda ishonganlarga minnatdorchilik bildirishi lozim. Axir,
          bizning ishda eng muhim prinsip - bu ishonch.
        </p>
        <p className="mb-6">
          Ishonch nafaqat mijoz va hamkorlar sadoqatini ta’minlaydi, qolversa,
          o’zimizga bo’lgan talabchanligimizni oshiradi. Biz uzoq yillik
          insoniylik an’analari ustiga qurilgan munosabatlar asosida hamkorlik
          qilamiz.
        </p>

        <div className="w-full    md:w-3/4 flex items-center justify-between">
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
  );
};

export default About;
