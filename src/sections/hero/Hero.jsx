import React from "react";
import "./Hero.css"; // Corrigindo a importação do CSS
import Cta from "../../assets/components/cta/Cta";
import { createWhatsAppLink } from "../../utils/whatsapp";
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
        <h3>Balancims prontos para toda obra, com suporte e entrega ágil.</h3>
        {console.log('Hero WhatsApp:', createWhatsAppLink("5516992631992", "Vim solicitar orçamento de um balancim"))}
        {console.log('Hero WhatsApp teste:', createWhatsAppLink("5516992631992", "teste"))}
        <Cta
          text="Solicitar orçamento"
          size="large"
          link={createWhatsAppLink("5516992631992", "Vim solicitar orçamento de um balancim")}
        />
      </div>
    </section>
  );
}
export default Hero;
