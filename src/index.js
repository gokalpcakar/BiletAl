import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App"
import "../src/reset.css";
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <>

    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>

  </>
);
