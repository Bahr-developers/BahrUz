import Footer from "../components/Footer";
import Header from "../components/Header";
import Partner from "../components/Partner";
import Services from "../components/Services";

function Home() {
  return <>
            <Header/>
            <div className="xl:container px-5 md:px-10 mx-auto">
              <Partner/>
              <Services/>
            </div>
            <Footer/>
          </>
}

export default Home;
