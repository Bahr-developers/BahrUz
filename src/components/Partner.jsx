import { usePartners } from "../Query";
import { PartnerTitle } from "../utils/links";
import PartnerCart from "./PartnerCart";

function Partner({ language }) {
  const getPartners = usePartners();

  return (
    <div className="xl:container mx-auto px-3 md:px-10">
      <div className="partner  mb-32">
        <div className="partner-inner">
          <div className="partner-inner">
            <h2 className="text-[35px] font-bold text-blue-400 dark:text-slate-300">
              {PartnerTitle[language].title}{" "}
            </h2>
            <div className="partner-cart-wrap mx-auto md:flex-wrap md:flex md:gap-4 mt-10">
              {getPartners.data?.data.length &&
                getPartners.data?.data.map((partner) => (
                  <PartnerCart img={partner.image_url} key={partner._id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
