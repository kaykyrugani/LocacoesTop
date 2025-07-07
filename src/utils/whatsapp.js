// Função utilitária para criar links do WhatsApp com mensagem codificada
export const createWhatsAppLink = (number, message) => {
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
};
