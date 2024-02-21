import { Link, NavLink } from "react-router-dom";
import { Links } from "../utils/links";
import GoTop from "../assets/top_rows.svg"
function Footer({language}) {
  return (
      <div className="footer dark:bg-transparent mt-[50vh] pt-20">
        <div className="xl:container mx-auto px-10">
          <div className="footer-inner dark:bg-transparent">
              <div className="join-us flex gap-2 items-center border rounded-xl p-10 py-16">
                <div className="join-us-text w-[60%]">
                  <h2 className="text-[53px] font-black">You can also be among this team :)</h2>
                  <p className="text-[18px] font-medium">Do you want to growth with us? Now prove to us that you need it! Become an integral part of the team</p>
                </div>
                <div className="join-us-jobs">
                  <div className="joib-own flex items-center gap-4">
                    <span className="block w-10 mt-1 h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                    <p className="text-[23px] font-bold">Frontend — ReactJS, Javascript</p>
                  </div>
                  <div className="joib-own flex items-center gap-4">
                    <span className="block w-10 mt-1 h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                    <p className="text-[23px] font-bold">Android Application Programmer (Junior, Strong Junior)</p>
                  </div>
                  <div className="joib-own flex items-center gap-4">
                    <span className="block w-10 mt-1 h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                    <p className="text-[23px] font-bold">Flutter - developer</p>
                  </div>
                  <div className="joib-own flex items-center gap-4">
                    <span className="block w-10 mt-1 h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                    <p className="text-[23px] font-bold">Backend Go programmers.</p>
                  </div>
                </div>
              </div>
              <div className="footer-nav flex justify-between mt-10">
                <div className="flex items-center gap-6">
                  {Links.map((link) => {
                    return (
                      <NavLink
                        key={link.id}
                        to={link.to}
                        className="py-1 px-2 hover:bg-slate-400 rounded hover:text-white"
                      >
                        <b>{link.content[language]}</b>
                      </NavLink>
                    );
                  })}

                </div>
                <div className="go-top border rounded-full p-3  dark:bg-transparent">
                  <Link to='#'><img src={GoTop} alt="top" /></Link>
                </div>
              </div>
              <div className="soshile-media">
                <Link to="/"></Link>
              </div>
          </div>
        </div>
      </div>    
  )
}

export default Footer