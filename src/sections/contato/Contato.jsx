import React, { useEffect, useRef, useState } from "react";
import "./Contato.css";
// Imagem movida para a pasta public/Imgs/
const HomemCont = '/Imgs/HomemCont.webp';
import Cta from "../../assets/components/cta/Cta";
import Particles from "../../components/Particles";
import { createWhatsAppLink } from "../../utils/whatsapp";

function Contato() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`contato ${isVisible ? 'visible' : ''}`} 
      id="contato"
      ref={sectionRef}
    >
      <div className="contato-overlay"></div>
      <Particles count={10} />
      
      <div className="contato-container">
        <div className="contato-content">
          <div className="contato-text">
            <h2 className="contato-title">Em busca do balancim ideal para sua construção ?</h2>
            <h3 className="contato-subtitle">Seu voto de confiança será recompensado</h3>
            <p className="contato-description">
              Fale com nosso time comercial, tire todas as suas duvidas e encontre a melhor solução para sua obra.
            </p>
            <div className="contato-cta">
              {console.log('Contato WhatsApp:', createWhatsAppLink("5516992631992", "Vim solicitar orçamento de um balancim"))}
              {console.log('Contato WhatsApp teste:', createWhatsAppLink("5516992631992", "teste"))}
              <Cta
                text="Solicitar orçamento"
                size="large"
                link={createWhatsAppLink("5516992631992", "Vim solicitar orçamento de um balancim")}
              />
            </div>
          </div>
          
          <div className="contato-image-container">
            <div className="contato-image-wrapper">
              <img 
                src={HomemCont} 
                alt="Homem apontando para o formulário de contato" 
                className="contato-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x600/f8f9fa/1a1a1a?text=Especialista';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
