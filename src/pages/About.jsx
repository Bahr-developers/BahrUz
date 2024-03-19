import Footer from "../components/Footer";
import Header from "../components/Header";
import { AboutTitle2 } from "../utils/links";

function About({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container mx-auto px-3" data-aos="fade-up">
        <div>
          <h2 className="text-5xl my-8 text-sky-400 dark:text-slate-300 mt-5">
            {AboutTitle2[language].title}
          </h2>
          <p className="text-lg">{AboutTitle2[language].subtitle}</p>
          <pre className="text-lg mb-12 max-w-[300px] w-full block text-ellipsis">
            {AboutTitle2[language].preTitle}
          </pre>
          <p className="text-lg">
            {AboutTitle2[language].contact}{" "}
            <a href="tel: +998939386462">+99893-938-64-62</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
