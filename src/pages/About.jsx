import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutTitle = {
  uz: {
    title: "Biz haqimizda",
    subtitle:
      "Bahr Tech IT kompaniyasiga 2023-yilda asos solingan. Kompaniya turli sohalar uchun innovatsion yechimlar taqdim etadi. Agar siz ham o'z biznesingizni rivojlantirmoqchi bo'lsangiz va IT yechimlar qidirayotgan bo'lsangiz unda aynan to'g'ri manzildasiz. Siz uchun 7 xil yo'nalishdagi xizmatlarni taklif qilamiz.",
    preTitle:
      "\n\nUlar quyidagilar: \n - Web ilovalar \n - Mobil ilovalar \n - CRM, ERP va tizimlar \n - Kiberxavfsizlik \n - Telegram bot \n - UI & UX \n - Sun'iy intellekt",
    contact: "Murojaat uchun tel : ",
  },
  ru: {
    title: "О нас",
    subtitle:
      "IT-компания Bahr Tech основана в 2023 году. Компания предоставляет инновационные решения для различных отраслей. Если вы также хотите развивать свой бизнес и ищете ИТ-решения, то вы попали по адресу. Мы предлагаем вам 7 различных услуг.",
    preTitle:
      "\n\nЭто: \n — Веб-приложения \n — Мобильные приложения \n — CRM, ERP и системы \n — Кибербезопасность \n — Telegram-бот \n — UI и UX \n — Искусственный интеллект",
    contact: "Контактный телефон : ",
  },
  en: {
    title: "About Us",
    subtitle:
      "Bahr Tech IT Company was founded in 2023. The company provides innovative solutions for various industries. If you also want to develop your business and are looking for IT solutions, then you are at the right place. We offer 7 different services for you.",
    preTitle:
      "\n\nThey are: \n - Web applications \n - Mobile applications \n - CRM, ERP and systems \n - Cyber ​​security \n - Telegram bot \n - UI & UX \n - Artificial intelligence",
    contact: "For inquiries, phone : ",
  },
};

function About({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container mx-auto px-3" data-aos="fade-up">
        <div>
          <h2 className="text-5xl my-8 text-sky-400 dark:text-slate-300 mt-5">
            {AboutTitle[language].title}
          </h2>
          <p className="text-lg">{AboutTitle[language].subtitle}</p>
          <pre className="text-lg mb-12 max-w-[300px] w-full block text-ellipsis">
            {AboutTitle[language].preTitle}
          </pre>
          <p className="text-lg">
            {AboutTitle[language].contact}{" "}
            <a href="tel: +998939386462">+99893-938-64-62</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
