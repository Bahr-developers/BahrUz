import PartnerLogo from '../assets/partner.jpg'

function PartnerCart() {
  return (
            <div className="partner-cart w-[150px] relative">
                    <img width={150} className='cursor-pointer rounded' src={PartnerLogo} alt="" />
                    <span className='partner-overley block absolute top-0 left-0 bg-[#7574729d] w-[100%] h-[100%] rounded'></span>
            </div>
  )
}

export default PartnerCart