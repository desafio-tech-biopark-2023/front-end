import "./App.css";
import { Footer } from "./components/Footer";
import { FormRegister } from "./components/FormRegister";
import { Header } from "./components/Header";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <FormRegister />
      <Footer />
    </div>
  );
}

export default App;
