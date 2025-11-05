import React, { useState } from 'react';
import { CreditCard, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const CheckoutForm = ({ product }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [status, setStatus] = useState('idle'); // idle | processing | success | error
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !card) {
      setStatus('error');
      setMessage('Per favore compila tutti i campi.');
      return;
    }
    setStatus('processing');
    setMessage('');

    // Simulazione del pagamento lato client. Per un pagamento reale serve un backend.
    await new Promise((res) => setTimeout(res, 1500));

    // Semplice validazione fittizia del numero di carta
    if (card.replace(/\s|-/g, '').length < 12) {
      setStatus('error');
      setMessage('Numero di carta non valido.');
      return;
    }

    setStatus('success');
    setMessage('Pagamento riuscito! Riceverai una mail di conferma a breve.');
  };

  return (
    <section id="checkout" className="bg-gray-50 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Completa l'acquisto</h3>
          <p className="mt-2 text-gray-600">
            Inserisci i tuoi dati per acquistare {product.name}.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Nome e cognome</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 focus:ring"
                  placeholder="Mario Rossi"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 focus:ring"
                  placeholder="mario@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Numero carta</label>
              <div className="relative">
                <input
                  type="text"
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 outline-none ring-indigo-200 focus:ring"
                  placeholder="1234 5678 9012 3456"
                />
                <CreditCard className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button
              type="submit"
              disabled={status === 'processing'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white shadow hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'processing' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Elaborazione in corso...
                </>
              ) : (
                <>Paga {product.price.toFixed(2)}€</>
              )}
            </button>
            {status === 'success' && (
              <div className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-green-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                <p className="text-sm">{message}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">
                <AlertCircle className="mt-0.5 h-5 w-5" />
                <p className="text-sm">{message}</p>
              </div>
            )}
            <p className="text-xs text-gray-500">
              Nota: questo è un esempio dimostrativo. Per attivare pagamenti reali (es. Stripe), è necessario configurare un backend sicuro.
            </p>
          </form>
        </div>
        <div>
          <div className="sticky top-6 rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900">Riepilogo ordine</h4>
            <div className="mt-4 flex items-center gap-4">
              <img src={product.image} alt={product.name} className="h-20 w-20 rounded-lg object-cover" />
              <div>
                <div className="font-medium text-gray-900">{product.name}</div>
                <div className="text-sm text-gray-600">{product.short}</div>
              </div>
            </div>
            <div className="mt-6 border-t pt-4">
              <div className="flex items-center justify-between text-gray-700">
                <span>Subtotale</span>
                <span>{product.price.toFixed(2)}€</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-gray-700">
                <span>Spedizione</span>
                <span>Gratuita</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-lg font-semibold text-gray-900">
                <span>Totale</span>
                <span>{product.price.toFixed(2)}€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
