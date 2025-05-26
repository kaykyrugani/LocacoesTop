import React from "react";
import "./Hero.css"; // Corrigindo a importação do CSS
import Cta from "../../assets/components/cta/Cta";
// Imagens movidas para a pasta public/Imgs/
const HeroImg = '/Imgs/hero.webp';
const Logo = '/Imgs/Logo.webp';

function Hero() {
  return (
    <section className="hero">
      <img src={HeroImg} alt="ImgHero" />
      <div className="heroContainer">
        <img src={Logo} alt="Logo" />
        <h1>Aluguel Rápido e Confiável</h1>
        <h3>Equipamentos prontos para toda obra, com suporte e entrega ágil.</h3>
        <Cta
          text="Fale com um especialista"
          size="large"
          link="https://wa.me/5516992631992?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista"
        />
      </div>
    </section>
  );
}
export default Hero;
