import { Link } from "react-router-dom";
import Img from "../assets/dachi.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_BASE_URL } from "../constants/img.constants";

const ParfolioCard = (props) => {
  return (
    <Link
      to={`https://${props.url}`}
      target="_blank"
      className="parfolio-wrap rounded-md overflow-hidden relative "
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="wrap relative w-[100%] block h-[340px] group">
        <div className="cart-title absolute z-10 pl-2 md:p-4">
          <h3 className="font-bold md:font-black text-[32px] md:text-[28px] text-white">
            {props.name}
          </h3>
          <p className="part-sort font-semibold md:font-medium text-[25px] md:text-[18px] text-white">
            {props.type}
          </p>
        </div>
        <LazyLoadImage
          src={`${IMG_BASE_URL}${props.images["0"]}`}
          alt={props.name}
          className={`absolute w-[100%] h-[100%] md:w-[100%] bg-black`}
        />
        <div className="overley absolute w-[100%] h-[100%] hover:bg-gradient-to-r from-[#44a08d8c]  to-[#093637cd] top-0 left-0 "></div>
        <div className="visit-all z-0 text-[30px] flex items-center gap-2 absolute bottom-5 right-5 ">
          {" "}
          <p className="text-[22px] font-bold text-white items-center hidden group-hover:block">
            Visit
          </p>{" "}
          <span className="text-white   items-center hidden group-hover:flex">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </div>
      </div>
    </Link>
  );
};
export default ParfolioCard;
