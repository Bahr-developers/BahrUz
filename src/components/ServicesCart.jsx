const ServicesCart = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto" data-aos="fade-up">
      <div className="w-[100%] border pt-3 pb-5 px-6 rounded-md mt-2 md:mt-0 shadow">
        <h3 className="text-[25px] md:text-[30px] font-bold text-blue-400 dark:text-slate-200">
          {title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-white">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServicesCart;
