import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from 'react-query'
import Router from './Components/Router';
import "./app.css";

const queryClient = new QueryClient()

const App = () => <BrowserRouter >
  <QueryClientProvider client={queryClient} >
    <div className="app">
      <Router />
    </div>
  </QueryClientProvider>
</BrowserRouter>;

export default App;
