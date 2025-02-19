// Contador de tempo (24 horas em segundos)
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState(86400);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
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

// Seção Hero: Introdução com imagem e chamada para ação
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Supere o término e redescubra sua força.</h1>
          <p>Transforme a dor da separação em um novo começo com nosso ebook exclusivo.</p>
          <a href="#cta" className="btn">QUERO MEU EBOOKk</a>
        </div>
        <div className="hero-image">
          <img src="https://raw.githubusercontent.com/xphivilaca/landing-page-project2/refs/heads/main/img/capa.webp" alt="Capa do Ebook" />
        </div>
      </div>
    </section>
  );
};

const EbookSection = () => {
  return (
    <section id="ebook">
      <div className="container">
        <h2>O QUE VOCÊ VAI ENCONTRAR NO EBOOK</h2>
        <ul className="ebook-benefits">
          <li>Dicas práticas para superar o término</li>
          <li>Exercícios para resgatar sua autoestima</li>
          <li>Estratégias para um novo começo</li>
        </ul>
        <p>
          Este ebook foi criado especialmente para mulheres que buscam se fortalecer e transformar a dor em poder.
          Cada capítulo foi desenvolvido com carinho para ajudar você a reconquistar sua felicidade.
        </p>
      </div>
    </section>
  );
};

export default EbookSection;

// Seção Sobre: Apresenta a autora e gera autoridade
const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Sobre a Autora</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://via.placeholder.com/150.png?text=Autora" alt="Foto da Autora" />
          </div>
          <div className="about-text">
            <p>
              Com anos de experiência auxiliando mulheres a superarem desafios emocionais, [Nome da Autora] compartilha
              técnicas e insights valiosos neste ebook transformador. Descubra como resgatar sua autoconfiança e iniciar
              uma nova fase da sua vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Depoimentos: Prova social para reforçar a credibilidade
const TestimonialsSection = () => {
  return (
    <section id="testemunhos">
      <div className="container">
        <h2>O Que Elas Estão Dizendo</h2>
        <div className="testimonials-list">
          <div className="testimonial">
            <img src="https://via.placeholder.com/100" alt="Juliana Andrade" />
            <h3>Juliana Andrade</h3>
            <p>"Este ebook me ajudou a redescobrir minha força e seguir em frente. Recomendo a todas!"</p>
          </div>
          <div className="testimonial">
            <img src="https://via.placeholder.com/100" alt="Mariana Silva" />
            <h3>Mariana Silva</h3>
            <p>"As estratégias e exercícios são incríveis. Foi um divisor de águas na minha vida."</p>
          </div>
          <div className="testimonial">
            <img src="https://via.placeholder.com/100" alt="Ana Costa" />
            <h3>Ana Costa</h3>
            <p>"Simplesmente transformador! O melhor investimento que já fiz em mim mesma."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção Mid-CTA: Chamada para ação exclusiva no meio da página
const MidCTASection = () => {
  return (
    <section id="mid-cta">
      <div className="container">
        <h2>Pronta para transformar sua vida?</h2>
        <p>Não perca tempo e adquira o ebook que vai mudar sua história!</p>
        <a href="#purchase" className="btn">Compre Agora</a>
      </div>
    </section>
  );
};

// Seção FAQ: Respostas às dúvidas mais comuns
const FAQSection = () => {
  return (
    <section id="faq">
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>O ebook é para mim?</h3>
            <p>
              Se você está passando por um término e quer se reerguer com força e autoconhecimento, este ebook é para você.
            </p>
          </div>
          <div className="faq-item">
            <h3>Como recebo o ebook?</h3>
            <p>Após a compra, você receberá o ebook diretamente no seu e-mail.</p>
          </div>
          <div className="faq-item">
            <h3>Existe garantia?</h3>
            <p>Sim! Oferecemos garantia de 30 dias para que você possa testar sem riscos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção CTA Final: Chamada para ação forte com o botão de compra
const CTASection = () => {
  return (
    <section id="cta">
      <div className="container">
        <h2>Transforme sua Vida Hoje</h2>
        <p>Adquira agora o seu ebook e comece sua jornada de superação!</p>
        <a href="#purchase" className="btn">Comprar Agora</a>
        <p className="garantia">✅ Garantia de 30 dias ou seu dinheiro de volta!</p>
      </div>
    </section>
  );
};

// Rodapé da página
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 [Seu Nome/Marca]. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

// Componente principal (App)
const App = () => {
  return (
    <div>
      <CountdownTimer />
      <HeroSection />
      <EbookSection />
      <AboutSection />
      <TestimonialsSection />
      <MidCTASection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
