import './Home.css'

const Home = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="home-header">
        <h1>React Bank</h1>
        <p>Safety is our priority</p>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h2>Why choose React Bank?</h2>
        <p>
          We offer safe and reliable banking services to our customers.
          With a wide range of products, from current accounts to loans,
          we are here to help you reach your financial goals.
        </p>

        <div className="container">
          {/* Cartão de destaque 1 */}
          <div className="card">
            <h3>Checking account</h3>
            <p>
              Our current account offers access to a wide range of services,
              including free transfers, online payments and 24/7 customer support.
            </p>
          </div>

          {/* Cartão de destaque 2 */}
          <div className="card">
            <h3>Loans</h3>
            <p>
              Do you need money to make your dreams come true? We offer loans
              with competitive interest rates and flexible payment terms.
            </p>
          </div>

          {/* Cartão de destaque 3 */}
          <div className="card">
            <h3>Investments</h3>
            <p>
              Do you want to increase your equity? We offer investment options with
              attractive returns.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;