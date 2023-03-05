import "./App.css";
import { Footer } from "./components/Footer";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";
import { Header } from "./components/Header";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <FormRegister /> */}
      <FormLogin />
      <Footer />
    </div>
  );
}

export default App;
