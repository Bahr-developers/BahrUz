import ServicesCart from "./ServicesCart";
import { servicesCartTitle } from "../utils/links";
import { useService } from "../Query";

const Services = ({ language }) => {
  // get Service
  const getService = useService();

  return (
    <div className="xl:container mx-auto px-3 md:px-10 mb-24">
      <div className="services-wrap">
        <div className="services-head flex items-center gap-4">
          <h3 className=" text-sky-500 text-[22px] font-bold dark:text-slate-300">
            {servicesCartTitle[language].title}
          </h3>
          <span className="block w-8 h-[1px] mt-1  bg-sky-500"></span>
        </div>
        <h3 className="text-[35px] font-black text-sky-500 dark:text-slate-300">
          {servicesCartTitle[language].subtitle}
        </h3>
        <div className="card-wrap mt-5 md:flex md:flex-wrap md:gap-5">
          <div className="card-wrap mt-5 grid md:grid-cols-2 gap-3">
            {getService?.data?.data?.map((service) => (
              <ServicesCart
                key={service.id}
                title={service.name}
                subtitle={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
