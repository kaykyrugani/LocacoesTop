import "./App.css";
import Hero from "../src/sections/hero/Hero";
import Aluguel from "../src/sections/alugue/Aluguel";
import Product from '../src/sections/produtos/Produtos';
import Servicos from '../src/sections/servicos/Servicos';
import Contato from '../src/sections/contato/Contato';
import Footer from '../src/sections/footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <Product />
      <Aluguel />
      <Servicos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
