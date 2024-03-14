import { Link } from "react-router-dom";
import Img from '../assets/dachi.jpg'

const ParfolioCard = () => {
    return (
        <Link to='/partfolio' className="w-[33%] parfolio-wrap">
            <div className="wrap relative w-[100%] block h-[350px]">
                <div className="cart-title absolute z-20 p-2 md:p-4">
                    <h3 className="font-bold md:font-black text-[14px] md:text-[25px] text-white">Dachi v Gorax</h3>
                    <p className="part-sort font-semibold md:font-medium text-[10px] md:text-[18px] text-white">MOBILE APP</p>
                </div>
                <img src={Img} alt="img" className={`absolute w-[100%] h-[100%] md:w-[100%] bg-black`}/>
                <div className="overley absolute w-[100%] h-[100%] hover:bg-[#2928287f] top-0 left-0  "></div>
            </div>
        </Link>
    );
};
export default ParfolioCard;