import { useEffect, useRef, useState } from 'react';
import Particles from '../../components/Particles';
import { FaBuilding, FaTools, FaFileAlt, FaClock, FaTruck, FaShieldAlt } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import './Servicos.css';

function Servicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    { icon: <FaBuilding className="feature-icon" />, text: "Atuando desde 2017" },
    { icon: <FaTools className="feature-icon" />, text: "Balancins de qualidade" },
    { icon: <FaFileAlt className="feature-icon" />, text: "Documentação regularizada" },
    { icon: <FaClock className="feature-icon" />, text: "Atendimento rápido" },
    { icon: <FaTruck className="feature-icon" />, text: "Entrega ágil" },
    { icon: <FaShieldAlt className="feature-icon" />, text: "Segurança garantida" }
  ];

  return (
    <section className="servicos-section" id="sobre" ref={ref}>
      <div className="background-gradient">
        <Particles count={20} />
      </div>
      
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">NOSSA HISTÓRIA</h2>
        </motion.div>

        <motion.div className="sobre-content" variants={itemVariants}>
          <div className="sobre-text">
            <motion.div 
              className="highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="years">+7</span> ANOS DE EXPERIÊNCIA
            </motion.div>
            <p className="sobre-descricao">
              Empresa atuante no ramo da construção civil desde 2017, especializada em locação de equipamentos, 
              com destaque para <strong>balancins elétricos</strong> e <strong>manuais</strong>. Nossos equipamentos possuem toda a documentação necessária, 
              garantindo <strong>segurança</strong> e <strong>qualidade</strong> em cada operação. Atendemos com <strong>agilidade</strong> e <strong>eficiência</strong>, 
              proporcionando a melhor solução para suas necessidades.
            </p>
          </div>
          
          <motion.div 
            className="features-grid"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-item"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-text">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Servicos;
