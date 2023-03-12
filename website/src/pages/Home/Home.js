import './Home.css'

const Home = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <h1>Banco React</h1>
        <p>Segurança é a nossa prioridade</p>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h2>Por que escolher o Banco React?</h2>
        <p>
          Oferecemos serviços bancários seguros e confiáveis para os nossos clientes.
          Com uma ampla gama de produtos, desde contas correntes até empréstimos,
          estamos aqui para ajudá-lo a alcançar as suas metas financeiras.
        </p>

        <div className="container">
          {/* Cartão de destaque 1 */}
          <div className="card">
            <h3>Conta corrente</h3>
            <p>
              A nossa conta corrente oferece acesso a uma ampla gama de serviços,
              incluindo transferências gratuitas, pagamentos on-line e suporte ao cliente 24/7.
            </p>
          </div>

          {/* Cartão de destaque 2 */}
          <div className="card">
            <h3>Empréstimos</h3>
            <p>
              Precisa de dinheiro para realizar os seus sonhos? Oferecemos empréstimos
              com taxas de juros competitivas e flexibilidade nos prazos de pagamento.
            </p>
          </div>

          {/* Cartão de destaque 3 */}
          <div className="card">
            <h3>Investimentos</h3>
            <p>
              Quer aumentar o seu patrimônio? Oferecemos opções de investimento com
              retornos atraentes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
  
export default Home;