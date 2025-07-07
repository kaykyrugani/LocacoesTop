import { useEffect, useState } from 'react';
import { products } from '../../assets/data/products';
import ProductCard from '../../assets/components/cardprodu/Cardpro';
import Cta from "../../assets/components/cta/Cta";
import './Produtos.css';

function ProductSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Mostra todos os produtos
  const displayedProducts = products;

  return (
    <section className={`product-section ${isVisible ? 'visible' : ''}`} id="produtos">
      <div className="container">
        <div className="product-section-header">
          <h2>Encontre o balancim certo para o seu serviço</h2>
          <p>Oferecemos balancins de alta qualidade e desempenho para garantir segurança e eficiência na sua obra.</p>
        </div>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
