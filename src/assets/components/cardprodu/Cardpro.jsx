import Cta from '../cta/Cta';
import './Cardpro.css';
// Imagens movidas para a pasta public/Imgs/
const BaEle = '/Imgs/baEle.webp';
const Ba1 = '/Imgs/baMan.webp';

function ProductCard({ name, description, topics, image }) {
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
            <Cta
              text="Solicitar orçamento"
              size="small"
              link="https://wa.me/5516992631992?text=Vim%20solicitar%20um%20or%C3%A7amento%20de%20Balancim"
              className="product-cta"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
