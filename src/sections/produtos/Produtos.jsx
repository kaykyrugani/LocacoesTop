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
          <h2>Encontre o equipamento certo para o seu serviço</h2>
          <p>Nossas soluções em equipamentos para construção civil oferecem qualidade e desempenho para atender às suas necessidades.</p>
        </div>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="product-actions">
          <Cta 
            text="Ver mais produtos"
            size="medium"
            link="https://wa.me/5516992631992?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
