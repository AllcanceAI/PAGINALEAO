import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', borderTop: '1px solid #222', padding: '3rem 1rem 1rem 1rem', textAlign: 'center' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <span className="text-gold" style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Playfair Display' }}>MT</span>
          <div style={{ letterSpacing: '4px', marginTop: '0.5rem', fontWeight: 600 }}>MOLINA TRADER</div>
        </div>
        
        <p style={{ color: '#666', fontSize: '0.85rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.8' }}>
          <strong>Aviso de Risco:</strong> A negociação de ativos financeiros (ações, índices, forex, etc.) envolve alto nível de risco e pode não ser adequada para todos os investidores. O alto grau de alavancagem pode trabalhar tanto a seu favor quanto contra você. Antes de decidir negociar qualquer mercado, você deve considerar cuidadosamente seus objetivos de investimento, nível de experiência e apetite pelo risco. Você não deve investir dinheiro que não pode se dar ao luxo de perder.
        </p>

        <div style={{ borderTop: '1px solid #111', paddingTop: '1.5rem', color: '#555', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>&copy; {new Date().getFullYear()} Molina Trader. Todos os direitos reservados.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#555', textDecoration: 'none' }}>Termos de Uso</a>
            <a href="#" style={{ color: '#555', textDecoration: 'none' }}>Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
