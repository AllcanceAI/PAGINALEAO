import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Brain, Clock, DollarSign, Rocket } from 'lucide-react';

const Hero = () => {
  const benefits = [
    { icon: <Target className="text-gold" size={24} />, text: 'ESTRATÉGIAS COMPROVADAS' },
    { icon: <TrendingUp className="text-gold" size={24} />, text: 'GESTÃO DE RISCO INTELIGENTE' },
    { icon: <Brain className="text-gold" size={24} />, text: 'MENTALIDADE DE TRADER' },
    { icon: <Clock className="text-gold" size={24} />, text: 'FLEXIBILIDADE DE TEMPO' },
    { icon: <DollarSign className="text-gold" size={24} />, text: 'LIBERDADE FINANCEIRA' },
  ];

  return (
    <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at 50% 0%, #1a1a1a 0%, #050505 70%)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 300px', minWidth: 0 }}
        >
          <div className="mb-4">
            <span style={{ letterSpacing: '4px', fontSize: '0.9rem', color: '#888', textTransform: 'uppercase' }}>Trader Profissional</span>
          </div>
          <h1 className="title-xl" style={{ marginBottom: '1.5rem' }}>
            TRANSFORME SEU TEMPO EM <br/>
            <span className="gradient-text">RESULTADOS</span><br/>
            COM O TRADE
          </h1>
          <p className="text-subtitle" style={{ marginBottom: '3rem' }}>
            O MERCADO FINANCEIRO PODE MUDAR SUA VIDA!
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {benefits.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <div style={{ padding: '8px', border: '1px solid var(--color-gold-dark)', borderRadius: '50%' }}>
                  {item.icon}
                </div>
                <span style={{ fontWeight: 600, letterSpacing: '1px' }}>{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="#pricing"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ width: '100%', maxWidth: '400px', display: 'flex', gap: '1rem' }}
          >
            <Rocket size={24} />
            <div>
              <div style={{ fontSize: '1.2rem' }}>COMECE HOJE</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 400, opacity: 0.8 }}>A CONSTRUIR SEU FUTURO</div>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', minHeight: '400px' }}>
            <img 
              src="/trader-main.jpg" 
              alt="Molina Trader" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '20px', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '2px solid var(--color-gold-dark)' 
              }} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none';
                document.getElementById('hero-placeholder').style.display = 'flex';
              }}
            />
            {/* Placeholder if image is missing */}
            <div id="hero-placeholder" style={{ 
              display: 'none',
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
              background: 'linear-gradient(45deg, #111, #222)', 
              borderRadius: '20px',
              border: '2px solid var(--color-gold-dark)',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <span className="text-gold" style={{ fontSize: '5rem', fontWeight: 800, fontFamily: 'Playfair Display' }}>MT</span>
              <span style={{ letterSpacing: '4px', marginTop: '1rem', textAlign: 'center' }}>MOLINA TRADER</span>
              <p style={{ marginTop: '2rem', textAlign: 'center', padding: '0 2rem', color: '#888' }}>
                 "Você não salvou a imagem como trader-main.jpg. Clique com o botão direito na imagem que mandou no chat, vá em Salvar como, e jogue na pasta public."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
