import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Rocket } from 'lucide-react';

const Pricing = () => {
  const features = [
    'Acesso à Comunidade VIP',
    'Salas ao vivo: XAUUSD e Índice',
    'Curso completo do Zero ao Avançado',
    'Módulo de Gestão de Risco Especializada',
    'Módulo de Psicologia e Mindset',
    'Planilhas de Gerenciamento Inclusas',
    'Suporte direto com os Especialistas',
  ];

  return (
    <section id="pricing" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-8">
          <h2 className="title-lg" style={{ marginBottom: '1rem' }}>SÓ DEPENDE <span className="gradient-text">DE VOCÊ</span></h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>A decisão que separa os amadores dos profissionais que vivem de mercado.</p>
        </div>

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(145deg, #111, #0a0a0a)', border: '1px solid var(--color-gold-dark)' }}
        >
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Features List */}
            <div>
              <h3 className="title-sm" style={{ marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                O QUE VOCÊ VAI <span className="text-gold">RECEBER</span>
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {features.map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 className="text-gold" size={20} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: '#ccc' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Box */}
            <div style={{ background: '#050505', padding: '2rem', borderRadius: '12px', border: '1px solid #222', textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', color: '#888', textDecoration: 'line-through', marginBottom: '0.5rem' }}>De R$ 1.997,00</div>
              <div style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Por apenas 12x de</div>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: '1', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem', verticalAlign: 'top' }}>R$</span>97<span style={{ fontSize: '1.5rem' }}>,14</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2rem' }}>ou R$ 997,00 à vista</div>
              
              <motion.a 
                href="COLOQUE_AQUI_O_LINK_DO_SEU_WHATSAPP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: '100%', marginBottom: '1rem', display: 'inline-block', textDecoration: 'none' }}
              >
                ENTRAR NO GRUPO VIP (WHATSAPP)
              </motion.a>
              
              <p style={{ fontSize: '0.8rem', color: '#666' }}>
                Pagamento 100% seguro. <br/> 7 dias de garantia incondicional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
