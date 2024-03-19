import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesCart from "../components/ServicesCart";
import { servicesCartTitle } from "../utils/links";

function ServicesPage({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container  mx-auto px-3">
        <div>
          <h3 className="text-sky-400 dark:text-slate-300 text-5xl my-10">
            Services
          </h3>
          <div className="card-wrap mt-5 grid md:grid-cols-2 gap-3 mb-10">
            {servicesCartTitle[language].services?.map((service) => (
              <ServicesCart
                key={service.id}
                title={service.title}
                subtitle={service.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
