import React from 'react';
import { ShieldCheck, Truck, BadgeCheck } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 shadow-sm">
    <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

const ProductDetails = ({ product }) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="mt-3 text-gray-600">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-3xl font-bold text-indigo-600">{product.price.toFixed(2)}€</div>
            {product.compareAt && (
              <div className="text-lg text-gray-400 line-through">{product.compareAt.toFixed(2)}€</div>
            )}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Feature icon={ShieldCheck} title="Pagamenti sicuri" desc="Transazioni criptate e rimborsi facili." />
            <Feature icon={Truck} title="Spedizione veloce" desc="Consegna in 24/48 ore in tutta Italia." />
            <Feature icon={BadgeCheck} title="Qualità garantita" desc="Materiali premium e assistenza dedicata." />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border bg-white shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
