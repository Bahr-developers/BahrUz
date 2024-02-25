import { Link, NavLink } from "react-router-dom";
import { Links } from "../utils/links";
import GoTop from "../assets/top_rows.svg";
function Footer({ language }) {
  return (
    <div className="footer dark:bg-transparent mt-[50vh] pt-20">
      <div className="xl:container mx-auto px-10">
        <div className="footer-inner dark:bg-transparent">
          <div className="join-us flex gap-2 items-center border rounded-xl p-10 py-16">
            <div className="join-us-text w-[60%]">
              <h2 className="text-[53px] font-black">
                You can also be among this team :)
              </h2>
              <p className="text-[18px] font-medium">
                Do you want to growth with us? Now prove to us that you need it!
                Become an integral part of the team
              </p>
            </div>
            <div className="join-us-jobs">
              <div className="joib-own flex items-center gap-4">
                <span className="block w-10 mt-1 h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                <p className="text-[23px] font-bold">
                  Frontend — ReactJS, Javascript
                </p>
              </div>
              <div className="joib-own flex items-center gap-4">
                <span className="block w-10 mt-1 h-[3px] bg-slate-500 rounded-xl dark:bg-white"></span>
                <p className="text-[23px] font-bold">
                  Android Application Programmer (Junior, Strong Junior)
                </p>
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
              <Link to="#">
                <img src={GoTop} alt="top" />
              </Link>
            </div>
          </div>
          <div className="media-wrap flex gap-20 items-center">
            <div className="soshile-media flex items-center gap-5 mt-10">
              <Link to="/" className="footer">
                <svg
                  className="hover:border hover:rounded-full dark:border dark:rounded-full dark:bg-transparent p-2"
                  width={50}
                  fill="#00000"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                </svg>
              </Link>
              <Link to="/" className="">
                <svg
                  className="hover:border hover:rounded-full dark:border dark:rounded-full dark:bg-transparent p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50 "
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
              </Link>
              <Link to="/" className="">
                <svg
                  className="hover:border hover:rounded-full dark:border dark:rounded-full dark:color-transparent p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                </svg>
              </Link>
              <Link to="/" className="">
                <svg
                  className="hover:border hover:rounded-full dark:border dark:rounded-full dark:color-transparent p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </Link>

              <Link to="/" className="">
                <svg
                  className="hover:border hover:rounded-full dark:border dark:rounded-full dark:color-transparent p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </Link>
              <Link to="/" className="">
                <svg
                  className="hover:border hover:rounded-full dark:border dark:rounded-full dark:color-transparent p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                </svg>
              </Link>
            </div>
            <div className="contact flex gap-12 mt-10">
              <Link to="" className="flex gap-2 hover:text-[#FFB534]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path>
                </svg>
                <p className="text-[18px] font-bold">
                  bahrdevelopers@gmail.com
                </p>
              </Link>
              <Link to="" className="flex gap-2 hover:text-[#FFB534]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  viewBox="0 0 24 24"
                  fill="#00000"
                >
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                </svg>
                <p className="text-[18px] font-bold">+998 97 108 20 04</p>
              </Link>
            </div>
          </div>
          <span className="w-[100%] h-[1px] bg-black my-7 block dark:bg-white"></span>
          <p className="tect-[18px] font-bold text-center mb-6">
            © BAHR GROUP 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
