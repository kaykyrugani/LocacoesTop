// src/data/products.js
// Imagens movidas para a pasta public/Imgs/
const BaEle = '/Imgs/baEle.webp';
const Ba1 = '/Imgs/baMan.webp';

export const products = [
  {
    id: 1,
    name: "BALANCIM ELÉTRICO",
    description: "COMPOSTO POR CABOS DE AÇOS GALVANIZADOS, 5/16.",
    topics: [
      "Todas as revisões são feitas antes de sair para entrega e depois que voltam da obra",
      "Este equipamento pode chegar a medir de 1m a 8m e o preço da locação é mesmo.",
    ],
    image: BaEle,
    whatsappLink: "https://wa.me/5516992631992?text=Vim%20solicitar%20or%C3%A7amento%20de%20um%20balancim%20eletrico"
  },
  {
    id: 2,
    name: "BALANCIM MANUAL",
    description: "COMPOSTO POR CABOS DE AÇOS GALVANIZADOS, 5/16.",
    topics: [
      "Todas as revisões são feitas antes de sair para entrega e depois que voltam da obra.",
      "Este equipamento pode chegar a medir de 1m a 6m e o preço da locação é mesmo.",
    ],
    image: Ba1,
    whatsappLink: "https://wa.me/5516992631992?text=Vim%20solicitar%20or%C3%A7amento%20de%20um%20balancim%20manual"
  },
];
