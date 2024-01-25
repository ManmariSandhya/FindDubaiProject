import "./App.css";
import Header from "./components/header/Header";
import { AppRouter } from "./app.router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
   <BrowserRouter>
      <Header></Header>
      
        <AppRouter></AppRouter>
        </BrowserRouter> 
    
  );
};

export default App;
