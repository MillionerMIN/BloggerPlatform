import { Layout } from '../components/common/layout/Layout';
import { Header } from '../components/header/Header';
import { Router } from '../components/router/Router';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
