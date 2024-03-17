import Footer from "../components/Footer";
import Header from "../components/Header";

function Blog({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="xl:container px-10 mx-auto">Blog</div>
      <Footer />
    </>
  );
}

export default Blog;
