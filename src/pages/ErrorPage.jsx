import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container mx-auto mt-10">
      <div className="text-[100px] text-yellow-500 text-center">
        <ion-icon name="warning"></ion-icon>
      </div>
      <p className="text-3xl text-center mb-6">Page not found</p>
      <div className="text-center">
        <Link
          to="/"
          className="mx-auto border rounded bg-blue-400 text-white border-blue-400 hover:bg-white hover:text-blue-400 duration-150 py-2 px-2 text-center text-xl"
        >
          Go to Home page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
