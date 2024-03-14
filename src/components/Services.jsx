import ServicesCart from "./ServicesCart";

const Services = () => {
  return (
    <div className="container mx-auto px-3 md:px-5 mb-24">
      <div className="services-wrap">
        <div className="services-head flex items-center gap-4">
          <h3 className=" text-sky-500 text-[22px] font-bold">Bizning</h3>
          <span className="block w-8 h-[1px] mt-1  bg-sky-500"></span>
        </div>
        <h3 className="text-[35px] font-black">Xizmatlarimiz</h3>
        <div className="card-wrap mt-5 md:flex md:flex-wrap md:gap-5">
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
          <ServicesCart />
        </div>
      </div>
    </div>
  );
};

export default Services;
