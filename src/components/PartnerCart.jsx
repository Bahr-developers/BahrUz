import { LazyLoadImage } from "react-lazy-load-image-component";
import PartnerLogo from "../assets/partner.jpg";

function PartnerCart() {
  return (
    <div
      className="partner-cart w-[150px] relative grayscale hover:grayscale-0 duration-200"
      data-aos="flip-left"
    >
      <LazyLoadImage
        width={150}
        className="cursor-pointer rounded"
        src={PartnerLogo}
        alt="img"
        effect="blur"
        height={145}
      />
    </div>
  );
}

export default PartnerCart;
