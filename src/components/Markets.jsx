import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Globe, ShieldCheck, Zap, Brain } from 'lucide-react';

const Markets = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="title-lg" style={{ marginBottom: '1rem' }}>DOMINE OS <span className="gradient-text">MERCADOS</span></h2>
          <p className="text-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>Aprenda com especialistas focados nos mercados mais lucrativos e dinâmicos do mundo. Duas frentes de atuação, um único objetivo: a sua consistência.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* XAUUSD */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <Globe className="text-gold" size={40} />
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-gold)', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>MERCADO INTERNACIONAL</div>
            </div>
            <h3 className="title-md" style={{ marginBottom: '1rem' }}>XAU/USD <span style={{ fontWeight: 300 }}>(OURO)</span></h3>
            <p style={{ color: '#ccc', marginBottom: '2rem' }}>
              O par mais volátil e lucrativo do Forex. Entenda os movimentos institucionais, zonas de liquidez e como extrair dólares do mercado global diariamente com estratégias institucionais.
            </p>
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Especialista</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--color-gold-dark), var(--color-gold))', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#000', fontSize: '1.2rem' }}>E1</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Especialista Forex</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-gold)' }}>Mestre em Price Action e XAUUSD</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* INDICE BRASILEIRO */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <LineChart className="text-gold" size={40} />
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-gold)', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>MERCADO NACIONAL</div>
            </div>
            <h3 className="title-md" style={{ marginBottom: '1rem' }}>ÍNDICE BRASILEIRO <span style={{ fontWeight: 300 }}>(WIN)</span></h3>
            <p style={{ color: '#ccc', marginBottom: '2rem' }}>
              A força da B3 ao seu alcance. Opere o minicontrato mais popular do Brasil com leitura de fluxo (Tape Reading) e contexto macroeconômico focado em resultados rápidos e precisos.
            </p>
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Especialista</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--color-gold-dark), var(--color-gold))', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#000', fontSize: '1.2rem' }}>E2</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Especialista B3</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-gold)' }}>Expert em Fluxo e Índice Bovespa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="card text-center" style={{ padding: '1.5rem' }}>
                <ShieldCheck size={32} className="text-gold mx-auto mb-4" style={{ margin: '0 auto 1rem auto' }}/>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Gestão de Risco</h4>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Proteja seu capital para sobreviver e lucrar.</p>
            </div>
            <div className="card text-center" style={{ padding: '1.5rem' }}>
                <Zap size={32} className="text-gold mx-auto mb-4" style={{ margin: '0 auto 1rem auto' }}/>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Operacional Validado</h4>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Estratégias que funcionam na prática.</p>
            </div>
            <div className="card text-center" style={{ padding: '1.5rem' }}>
                <Brain size={32} className="text-gold mx-auto mb-4" style={{ margin: '0 auto 1rem auto' }}/>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Controle Emocional</h4>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Aja como profissional, não como amador.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Markets;
