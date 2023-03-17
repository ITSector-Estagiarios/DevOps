// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import './Home.css';
const Home = () => {
  if (stryMutAct_9fa48("28")) {
    {}
  } else {
    stryCov_9fa48("28");
    return <div>
      {/* Cabeçalho */}
      <header className="header">
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
    </div>;
  }
};
export default Home;