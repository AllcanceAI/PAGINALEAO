import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    { id: 1, name: 'Aluno 1', result: 'R$ 1.500 em 1 dia', text: 'Depois que entendi a leitura institucional no XAUUSD, parei de devolver dinheiro para o mercado.' },
    { id: 2, name: 'Aluno 2', result: 'Consistência atingida', text: 'A gestão de risco ensinada aqui foi o divisor de águas. Finalmente fechei o mês positivo no Índice.' },
    { id: 3, name: 'Aluno 3', result: 'Liberdade Geográfica', text: 'Hoje opero de qualquer lugar. A comunidade me deu a base que faltava para viver do mercado.' },
  ];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(to bottom, #050505, #111)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="title-lg" style={{ marginBottom: '1rem' }}>RESULTADOS <span className="gradient-text">REAIS</span></h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>Não vendemos ilusão. Construímos profissionais. Veja o resultado de quem já faz parte da nossa comunidade.</p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              className="card glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#ddd' }}>"{t.text}"</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                {/* Image Placeholder */}
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#333', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {/* <img src="caminho_da_imagem" alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> */}
                  <span style={{ fontSize: '0.8rem', color: '#888' }}>IMG</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 'bold' }}>{t.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center" style={{ marginTop: '4rem' }}>
            <h3 className="title-md" style={{ marginBottom: '2rem' }}>ACOMPANHE NOSSAS OPERAÇÕES</h3>
            <div className="grid grid-cols-3 gap-4" style={{ marginTop: '2rem' }}>
                <div style={{ width: '100%', height: '450px', backgroundColor: '#111', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
                  <img src="/resultado1.jpg" alt="Resultado de Operação" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ width: '100%', height: '450px', backgroundColor: '#111', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
                  <img src="/resultado2.jpg" alt="Resultado de Operação" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ width: '100%', height: '450px', backgroundColor: '#111', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
                  <img src="/resultado3.jpg" alt="Resultado de Operação" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
