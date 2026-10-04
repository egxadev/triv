import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartButton({ className = '' }) {
  const { totalItems, openCart } = useCart();

  return (
    <button
      id="cart-button"
      className={`inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white px-3.5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 hover:bg-white/15 hover:border-white/30 hover:-translate-y-px cursor-pointer ${className}`}
      onClick={openCart}
      aria-label={`Keranjang belanja, ${totalItems} item`}
      title="Lihat Keranjang Belanja"
    >
      <div className="relative flex items-center justify-center">
        <ShoppingCart size={20} strokeWidth={2.2} />
        {totalItems > 0 && (
          <span
            className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[10px] font-extrabold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-[pulse-badge_1.8s_infinite]"
            id="cart-badge-count"
          >
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
      <span className="text-[13px] font-semibold">Keranjang</span>
    </button>
  );
}
