import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout/Layout.tsx';
import App from './app/App.tsx';
import About from './routes/about/About.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },

      { path: '/about', element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
