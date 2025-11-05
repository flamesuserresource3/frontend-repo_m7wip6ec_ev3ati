import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Star className="h-4 w-4 text-yellow-300" />
              Novità: disponibilità limitata
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Vendi il tuo prodotto con stile e semplicità
            </h1>
            <p className="mt-4 text-lg text-indigo-50">
              Presenta il tuo prodotto, accetta pagamenti in modo sicuro e monitora le vendite — tutto da un'unica interfaccia.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#checkout" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 shadow hover:bg-indigo-50">
                <Rocket className="h-5 w-5" />
                Acquista ora
              </a>
              <a href="#analytics" className="text-white/90 hover:text-white">Vedi statistiche</a>
            </div>
          </div>
          <div className="mt-10 w-full md:mt-0 md:w-auto">
            <div className="relative mx-auto h-64 w-full max-w-md rounded-2xl bg-white/10 p-6 backdrop-blur md:h-72">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
              <div className="relative">
                <div className="text-sm text-indigo-100">In evidenza</div>
                <div className="mt-2 text-2xl font-semibold">Il tuo Prodotto</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-indigo-50">
                  <li>Qualità premium</li>
                  <li>Spedizione rapida</li>
                  <li>Garanzia soddisfatti o rimborsati</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
