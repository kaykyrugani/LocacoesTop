import React from 'react';
import './Footer.css';
// Imagem movida para a pasta public/Imgs/
import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="info-icon" />,
    title: 'Endereço',
    description: 'Rua Dr Julio Dante Risso, 557, jardim anhanguera CEP: 14.092-190 Ribeirão Preto/SP'
  },
  {
    icon: <FaPhone className="info-icon" />,
    title: 'Telefone',
    description: '(16) 99247-9494 ou 99263-1992',
    link: ' https://wa.me/5516992631992?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.'
  },
  {
    icon: <FaEnvelope className="info-icon" />,
    title: 'E-mail',
    description: 'toplocacoes17@gmail.com',
    link: 'mailto:toplocacoes17@gmail.com'
  },
  {
    icon: <FaClock className="info-icon" />,
    title: 'Horário de Funcionamento',
    description: 'Segunda a Sexta: 09:00 às 17:00'
  }
];

const socialLinks = [
  { 
    icon: <FaInstagram />, 
    url: 'https://www.instagram.com/top_locacoes?igsh=MThoanB3YWI3dm50dA%3D%3D', 
    label: 'Instagram' 
  },
  { 
    icon: <FaWhatsapp />, 
    url: 'https://wa.me/5516992631992?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.', 
    label: 'WhatsApp' 
  }
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section contact-info'>
          <h3 className='section-title'>Entre em Contato</h3>
          <div className='contact-grid'>
            {contactInfo.map((item, index) => (
              <div key={index} className='contact-item'>
                <div className='contact-icon'>{item.icon}</div>
                <div className='contact-details'>
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className='contact-link'>{item.description}</a>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className='footer-section social-section'>
          <h3 className='section-title'>Redes Sociais</h3>
          <div className='social-links'>
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className='social-link'
                target='_blank' 
                rel='noopener noreferrer'
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Auto Aluguel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
