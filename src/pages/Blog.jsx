import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";

function Blog({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container px-3 mx-auto">
        <h3 className="text-sky-400 dark:text-slate-300 text-4xl mt-8  mb-96">
          Blog
        </h3>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
