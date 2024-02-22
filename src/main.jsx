import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(  
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
            <ToastContainer autoClose={2000} />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  
);
