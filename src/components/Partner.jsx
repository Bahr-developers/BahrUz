import PartnerCart from "./PartnerCart";

function Partner() {
  return (
    <div className="partner mb-32">
      <div className="partner-inner">
        <div className="partner-inner">
          <h2 className="text-[35px] font-bold">Hamkorlarimiz</h2>
          <div className="partner-cart-wrap  flex mx-auto md:flex-wrap gap-2 mt-10">
            <PartnerCart />
            <PartnerCart />
            <PartnerCart />
            <PartnerCart />
            <PartnerCart />
            <PartnerCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
