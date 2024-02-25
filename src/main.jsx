import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
// import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import {BrowserRouter} from "react-router-dom";
// import ProviderR from "./context/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(  
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>        
        <BrowserRouter>
          {/* <ProviderR> */}
            <App />
            <ToastContainer autoClose={2000} /> 
          {/* </ProviderR>            */}
        </BrowserRouter>        
      </QueryClientProvider>
    </React.StrictMode>  
);
