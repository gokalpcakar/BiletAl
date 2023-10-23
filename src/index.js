import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
import "../src/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </>
);
