import Footer from "../components/Footer";
import Header from "../components/Header";

function About({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container mx-auto">
        <div>
          <h2 className="text-4xl my-8 text-sky-400 dark:text-slate-300">
            Biz haqimizda
          </h2>
          <p className="text-lg mb-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            doloribus esse tenetur perferendis a excepturi labore, nisi iure qui
            animi corrupti possimus quisquam? Cupiditate aspernatur optio
            quidem. Accusamus nulla commodi molestias hic iure. Incidunt vel,
            libero, porro vero ipsa dolorum alias quasi aliquam nulla
            consequatur quae rerum minima inventore placeat voluptas, error iure
            aut corporis quod repellat repellendus accusantium magnam velit
            dignissimos! Ullam voluptates, molestias fugit earum tempore
            officiis fugiat? Nostrum laborum quaerat corrupti tenetur hic
            deleniti quo accusantium rem dolorum nisi consequatur libero numquam
            saepe, molestiae cupiditate nulla, voluptatem facere quas magni
            minus iste iure eligendi ex nemo! Ipsam.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
