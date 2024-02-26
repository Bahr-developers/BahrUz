import Footer from "../components/Footer";
import Header from "../components/Header";
import Partner from "../components/Partner";

function Home() {
  return <>
        <Header/>
        <div className="xl:container px-10 mx-auto">
          <Partner/>
        </div>
        <Footer/>
          </>
}

export default Home;
