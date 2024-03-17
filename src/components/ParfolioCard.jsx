import { Link } from "react-router-dom";
import Img from "../assets/dachi.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ParfolioCard = () => {
  return (
    <Link
      to="/portfolio"
      className="parfolio-wrap rounded-md overflow-hidden relative"
    >
      <div className="wrap relative w-[100%] block h-[340px]">
        <div className="cart-title absolute z-10 pl-2 md:p-4">
          <h3 className="font-bold md:font-black text-[32px] md:text-[28px] text-white">
            Dachi v Gorax
          </h3>
          <p className="part-sort font-semibold md:font-medium text-[25px] md:text-[18px] text-white">
            MOBILE APP
          </p>
        </div>
        <LazyLoadImage
          src={Img}
          alt="img"
          className={`absolute w-[100%] h-[100%] md:w-[100%] bg-black`}
        />
        <div className="overley absolute w-[100%] h-[100%] hover:bg-gradient-to-r from-[#44a08d8c]  to-[#093637cd] top-0 left-0 "></div>
        <div className="visit-all z-0 text-[30px] flex items-center gap-2 absolute bottom-5 right-5 ">
          {" "}
          <p className="text-[22px] font-bold">Visit</p>{" "}
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </Link>
  );
};
export default ParfolioCard;
