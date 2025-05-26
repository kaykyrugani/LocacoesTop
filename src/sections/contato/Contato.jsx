import React, { useEffect, useRef, useState } from "react";
import "./Contato.css";
// Imagem movida para a pasta public/Imgs/
const HomemCont = '/Imgs/HomemCont.webp';
import Cta from "../../assets/components/cta/Cta";
import Particles from "../../components/Particles";

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
            <h2 className="contato-title">Precisa de algum equipamento?</h2>
            <h3 className="contato-subtitle">Seu voto de confiança será recompensado</h3>
            <p className="contato-description">
              Fale com um de nossos especialistas para tirar todas as suas dúvidas e encontrar a melhor solução para suas necessidades.
            </p>
            <div className="contato-cta">
              <Cta
                text="Fale com um especialista"
                size="large"
                link="https://wa.me/5516992631992?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista"

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
