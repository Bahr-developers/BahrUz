import { LazyLoadImage } from "react-lazy-load-image-component";

import { IMG_BASE_URL } from "../constants/img.constants";

function PartnerCart(props) {
  return (
    <div
      className="partner-cart w-[150px] relative grayscale hover:grayscale-0 duration-200"
      data-aos="flip-left"
    >
      <LazyLoadImage
        width={150}
        className="cursor-pointer rounded"
        src={`${IMG_BASE_URL}${props.img}`}
        alt="img"
        effect="blur"
        height={145}
      />
    </div>
  );
}

export default PartnerCart;
