import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
function Layout() {
  return (
    <HelmetProvider>
      <Header />
      <main className="main-wrapper wrapper bg-bg-primary-clr">
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
export default Layout;
