import { Link } from "react-router-dom";
import Img from '../assets/partner.jpg'

const ParfolioCard = () => {
    return (
        <Link to='/partfolio'>
            <div className="carts-part relative">
                <div className="cart-title absolute z-10 p-5">
                    <h3 className="font-black text-[18px] text-black">Dachi v Gorax</h3>
                    <p className="part-sort font-medium text-black">MOBILE APP</p>
                </div>
                <img src={Img} alt="img" className={`absolute w-[150px] bg-black`}/>
                <div className="overley absolute w-[100%] h-[100%] top-0 left-0 bg-slate-400 z-20"></div>
            </div>
        </Link>
    );
};
export default ParfolioCard;