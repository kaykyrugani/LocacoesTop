import Cta from '../cta/Cta';
import './Cardpro.css';
import { createWhatsAppLink } from '../../../utils/whatsapp';
// Imagens movidas para a pasta public/Imgs/
const BaEle = '/Imgs/baEle.webp';
const Ba1 = '/Imgs/baMan.webp';

function ProductCard({ name, description, topics, image, whatsappLink }) {
  return (
    <div className="card">
      {/* Efeito de brilho ao redor do card */}
      <div className="card-glow"></div>
      
      {/* Container principal do conteúdo */}
      <div className="card-content-wrapper">
        <div className="card-image-container">
          <img 
            src={image} 
            alt={name} 
            className="card-image" 
            onError={(e) => {
              // Fallback para um SVG inline caso a imagem não carregue
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="400" height="220"><rect width="100%" height="100%" fill="%23f8f9fa"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%231a1a1a">Equipamento</text></svg>';
            }}
            loading="lazy"
          />
        </div>
        <div className="card-content">
          <h4>{name}</h4>
          <p>{description}</p>
          {topics && topics.length > 0 && (
            <ul>
              {topics.map((topic, index) => (
                <li key={index}>
                  {topic}
                </li>
              ))}
            </ul>
          )}
          <div className="card-cta">
            {console.log('Cardpro WhatsApp:', whatsappLink ? whatsappLink : createWhatsAppLink("5516992631992", `Gostaria de saber mais sobre o produto: ${name}`))}
            <Cta
              text="Saiba mais"
              size="small"
              link={whatsappLink ? whatsappLink : createWhatsAppLink("5516992631992", `Gostaria de saber mais sobre o produto: ${name}`)}
              className="product-cta"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
