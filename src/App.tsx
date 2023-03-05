import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
