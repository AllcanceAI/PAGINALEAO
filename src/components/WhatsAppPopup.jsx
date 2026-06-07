import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/5518991494782";

const WhatsAppPopup = () => {
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    // Aparece após 20 segundos
    const timer = setTimeout(() => {
      setVisible(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Contador regressivo de 5 segundos para redirecionar automaticamente
    if (counter === 0) {
      window.open(WHATSAPP_LINK, '_blank');
      return;
    }

    const interval = setInterval(() => {
      setCounter(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [visible, counter]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Fundo escurecido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(0,0,0,0.85)',
              zIndex: 9998,
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Caixa de Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 60 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{
              position: 'fixed',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999,
              width: '90%',
              maxWidth: '460px',
              background: 'linear-gradient(145deg, #111, #0a0a0a)',
              border: '2px solid var(--color-gold)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              boxShadow: '0 0 60px rgba(212,175,55,0.3)',
            }}
          >
            {/* Ícone do WhatsApp */}
            <div style={{
              width: '70px', height: '70px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 30px rgba(37,211,102,0.4)',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="white" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </div>

            {/* Emoji troféu */}
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏆</div>

            <h2 style={{
              fontSize: '1.6rem', fontWeight: 800,
              color: '#fff', marginBottom: '0.5rem',
              lineHeight: 1.2,
            }}>
              PARABÉNS!<br />
              <span style={{ color: 'var(--color-gold)' }}>VOCÊ FOI SELECIONADO!</span>
            </h2>

            <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Você foi escolhido para receber nossa <strong style={{ color: '#fff' }}>oferta exclusiva</strong>!<br />
              Clique abaixo e entre agora no nosso grupo VIP do WhatsApp.
            </p>

            {/* Botão principal */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'block',
                backgroundColor: '#25D366',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1.1rem',
                padding: '1rem',
                borderRadius: '12px',
                textDecoration: 'none',
                marginBottom: '1rem',
                letterSpacing: '1px',
              }}
            >
              ENTRAR NO GRUPO VIP AGORA →
            </motion.a>

            {/* Contador regressivo */}
            <p style={{ color: '#888', fontSize: '0.85rem' }}>
              Você será redirecionado automaticamente em{' '}
              <span style={{ color: 'var(--color-gold)', fontWeight: 800, fontSize: '1rem' }}>{counter}s</span>
            </p>

            {/* Botão fechar */}
            <button
              onClick={() => setVisible(false)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'none', border: 'none',
                color: '#555', fontSize: '1.4rem', cursor: 'pointer',
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppPopup;
