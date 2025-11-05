import React from 'react';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import CheckoutForm from './components/CheckoutForm';
import SalesAnalytics from './components/SalesAnalytics';

const App = () => {
  const product = {
    name: 'Prodotto Premium',
    short: 'Versione 2025',
    description:
      'Un prodotto di alta qualità pensato per offrire un\'esperienza impeccabile. Materiali selezionati, design curato e supporto dedicato.',
    price: 79.0,
    compareAt: 99.0,
    image:
      'https://images.unsplash.com/photo-1518443881211-6c30702e0b31?q=80&w=1200&auto=format&fit=crop',
  };

  const analytics = {
    labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
    values: [120, 80, 140, 90, 220, 300, 180],
    averageOrder: 79.0,
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductDetails product={product} />
      <CheckoutForm product={product} />
      <SalesAnalytics data={analytics} />
      <footer className="border-t bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} Il tuo brand. Tutti i diritti riservati.</p>
            <div className="flex gap-4">
              <a href="#checkout" className="hover:text-gray-900">Acquista</a>
              <a href="#analytics" className="hover:text-gray-900">Statistiche</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
