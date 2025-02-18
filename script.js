// CountdownTimer.jsx
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState(86400); // 24 horas em segundos

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div id="contador-fixo">
      <p>Oferta válida por:</p>
      <div id="timer">
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

// Header.jsx
const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>[Nome do Produto]: A solução definitiva para [problema do cliente]</h1>
        <p>Descubra como [Nome do Produto] pode [benefício principal] em apenas [tempo].</p>
        <a href="#cta" className="btn">Compre Agora</a>
      </div>
    </header>
  );
};

// VideoSection.jsx
const VideoSection = () => {
  return (
    <section id="video">
      <div className="container">
        <h2>Conheça o [Nome do Produto] em ação</h2>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SEU_VIDEO_AQUI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

// BenefitsSection.jsx
const BenefitsSection = () => {
  return (
    <section id="beneficios">
      <div className="container">
        <h2>Por que escolher [Nome do Produto]?</h2>
        <div className="beneficios-list">
          <div className="beneficio">
            <h3>Benefício 1</h3>
            <p>Descrição breve do benefício.</p>
          </div>
          <div className="beneficio">
            <h3>Benefício 2</h3>
            <p>Descrição breve do benefício.</p>
          </div>
          <div className="beneficio">
            <h3>Benefício 3</h3>
            <p>Descrição breve do benefício.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// TestimonialsSection.jsx
const TestimonialsSection = () => {
  return (
    <section id="depoimentos">
      <div className="container">
        <h2>O que estão dizendo sobre o [Nome do Produto]?</h2>
        <div className="depoimentos-list">
          <div className="depoimento">
            <img src="https://via.placeholder.com/100" alt="Foto do usuário" />
            <h3>João Silva</h3>
            <p>"O [Nome do Produto] mudou a minha vida! Recomendo para todos que buscam [benefício]."</p>
          </div>
          <div className="depoimento">
            <img src="https://via.placeholder.com/100" alt="Foto do usuário" />
            <h3>Maria Souza</h3>
            <p>"Incrível! Nunca vi um produto tão eficiente e fácil de usar."</p>
          </div>
          <div className="depoimento">
            <img src="https://via.placeholder.com/100" alt="Foto do usuário" />
            <h3>Carlos Oliveira</h3>
            <p>"Comprei e não me arrependi. Vale cada centavo!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTASection.jsx
const CTASection = () => {
  return (
    <section id="cta">
      <div className="container">
        <h2>Pronto para experimentar?</h2>
        <p>Não perca tempo, adquira já o seu!</p>
        <a href="#" className="btn">Compre Agora</a>
        <p className="garantia">✅ Garantia de 30 dias ou seu dinheiro de volta!</p>
      </div>
    </section>
  );
};

// FAQSection.jsx
const FAQSection = () => {
  return (
    <section id="faq">
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>O produto é fácil de usar?</h3>
            <p>Sim, o [Nome do Produto] foi projetado para ser intuitivo e acessível para todos.</p>
          </div>
          <div className="faq-item">
            <h3>Qual é o prazo de entrega?</h3>
            <p>O prazo de entrega é de até 7 dias úteis para todo o Brasil.</p>
          </div>
          <div className="faq-item">
            <h3>Posso devolver se não gostar?</h3>
            <p>Sim, oferecemos uma garantia de 30 dias para reembolso.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer.jsx
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 [Nome da Empresa]. Todos os direitos reservados.</p>
        <p><a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a></p>
        <div className="redes-sociais">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// App.jsx
const App = () => {
  return (
    <div>
      <CountdownTimer />
      <Header />
      <VideoSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

// Renderizar o App
ReactDOM.render(<App />, document.getElementById('root'));
