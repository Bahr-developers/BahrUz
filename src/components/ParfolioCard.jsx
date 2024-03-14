import { Link } from "react-router-dom";
import Img from '../assets/partfolio.jpg'

const ParfolioCard = () => {
    return (
        <Link to='/partfolio' className="block">
            <div className="carts-part relative">
                <div className="cart-title absolute z-10 p-2 md:p-4">
                    <h3 className="font-bold md:font-black text-[14px] md:text-[25px] text-white">Dachi v Gorax</h3>
                    <p className="part-sort font-semibold md:font-medium text-[10px] md:text-[18px] text-white">MOBILE APP</p>
                </div>
                <img src={Img} alt="img" className={`absolute w-[170px] md:w-[350px] rounded-md bg-black`}/>
                <div className="overley absolute w-[100%] h-[100%] top-0 left-0 bg-slate-400 z-20"></div>
            </div>
        </Link>
    );
};
export default ParfolioCard;