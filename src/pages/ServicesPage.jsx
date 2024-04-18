import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesCart from "../components/ServicesCart";
import { useService } from "../Query";

function ServicesPage({ language, setLanguage }) {
  const getService = useService();

  console.log(getService.data?.data);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container  mx-auto px-3">
        <div>
          <h3 className="text-sky-400 dark:text-slate-300 text-5xl my-10">
            Services
          </h3>
          <div className="card-wrap mt-5 grid md:grid-cols-2 gap-3 mb-10">
            {getService?.data?.data?.map((service) => (
              <ServicesCart
                key={service.id}
                title={service.name}
                subtitle={service.description}
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
