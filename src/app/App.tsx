import AppLayout from './features/Layout/AppLayout';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Lovha Studio | Hjem</title>

        <meta name="description" content="Velkommen til Lovha Studio." />
      </Helmet>{' '}
      <AppLayout />
    </>
  );
}

export default App;
