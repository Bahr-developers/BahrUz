import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesCart from "../components/ServicesCart";
import { CareerTitle } from "../utils/links";

function Career({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container px-3 mx-auto">
        <h3 className="text-6xl md:text-8xl text-center mt-6 mb-12 text-sky-500 dark:text-slate-300">
          {CareerTitle[language].title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-20">
          {CareerTitle[language].careerCarts.map((cart) => (
            <ServicesCart
              key={cart.id}
              title={cart.heading}
              subtitle={cart.subtitle}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Career;
