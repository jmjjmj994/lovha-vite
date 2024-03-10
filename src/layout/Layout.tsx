import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Header />
      <main className="main-wrapper wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
