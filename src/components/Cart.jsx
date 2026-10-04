import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    cart,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    closeCart,
  } = useCart();

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const formatIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      closeCart();
    }, 2200);
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-md z-[2000] flex justify-end animate-[fadeIn_0.2s_ease-out]"
      onClick={closeCart}
    >
      <aside
        className="w-full max-w-[450px] h-screen bg-[#0d1522] border-l border-white/8 flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.8)] animate-[slideInRight_0.25s_cubic-bezier(0.16,1,0.3,1)]"
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-5 px-6 border-b border-white/8 flex items-center justify-between bg-[#0b111c]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={22} className="text-triv-blue" />
            <h2 id="cart-title" className="text-lg font-bold text-white">
              Keranjang Belanja
            </h2>
            <span className="text-[13px] text-triv-dim">({totalItems} item)</span>
          </div>
          <button
            className="text-triv-dim p-1 rounded hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            id="close-cart-btn"
            onClick={closeCart}
            aria-label="Tutup keranjang"
          >
            <X size={22} />
          </button>
        </div>

        <div className="grow overflow-y-auto p-5">
          {checkoutSuccess ? (
            <div className="text-center py-[60px] px-5 flex flex-col items-center">
              <CheckCircle2 size={56} className="text-emerald-500 mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-white mb-2">Pesanan Berhasil Diproses!</h3>
              <p className="text-sm text-triv-muted">Terima kasih telah berbelanja merchandise resmi Triv.</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10 px-5 text-triv-muted">
              <div className="bg-white/[0.04] p-6 rounded-full mb-4 text-triv-dim">
                <ShoppingBag size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Keranjang Kosong</h3>
              <p className="text-sm text-triv-muted">Belum ada produk merchandise atau tiket yang ditambahkan.</p>
              <button
                className="mt-5 bg-triv-blue text-white py-2.5 px-6 rounded-[6px] font-semibold text-sm hover:bg-triv-blue-hover transition-colors cursor-pointer"
                onClick={closeCart}
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5" id="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3.5 bg-[#111b2b] border border-white/8 rounded-[10px] p-3.5" id={`cart-item-${item.id}`}>
                  <div className="w-[70px] h-[70px] bg-[#090e18] rounded-[6px] flex items-center justify-center shrink-0 p-1.5">
                    <img
                      src={item.image || '/assets/logo.png'}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="grow flex flex-col">
                    <h4 className="text-sm font-semibold text-white leading-[1.3] mb-1">{item.name}</h4>
                    <div className="text-xs text-triv-dim mb-2.5">{formatIDR(item.price)}</div>
                    
                    <div className="flex items-center justify-between gap-2.5 mt-auto">
                      <div className="flex items-center bg-[#0a101b] border border-white/8 rounded-[6px]">
                        <button
                          className="px-2 py-1 text-triv-muted hover:text-white transition-colors cursor-pointer"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Kurangi jumlah"
                          id={`qty-decrease-${item.id}`}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-[13px] font-bold px-1.5 min-w-[24px] text-center text-white" id={`qty-val-${item.id}`}>
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 text-triv-muted hover:text-white transition-colors cursor-pointer"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Tambah jumlah"
                          id={`qty-increase-${item.id}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="text-[13px] font-bold text-triv-blue">
                        {formatIDR(item.price * item.quantity)}
                      </div>

                      <button
                        className="text-red-500 p-1 rounded hover:bg-red-500/15 transition-colors cursor-pointer"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Hapus ${item.name} dari keranjang`}
                        title="Hapus produk"
                        id={`btn-remove-${item.id}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && !checkoutSuccess && (
          <div className="py-5 px-6 bg-[#0b111c] border-t border-white/8">
            <div className="flex justify-between text-sm text-triv-muted mb-2">
              <span>Total Item</span>
              <span className="text-white font-medium">{totalItems} pcs</span>
            </div>
            <div className="flex justify-between text-[17px] font-extrabold text-white border-t border-white/8 pt-3 mt-3 mb-5">
              <span>Total Harga</span>
              <span className="text-emerald-400 font-extrabold" id="cart-total-price">
                {formatIDR(totalPrice)}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                className="inline-flex items-center gap-1.5 bg-red-500/15 text-red-500 border border-red-500/30 px-4 py-3 rounded-[6px] text-[13px] font-semibold hover:bg-red-500/25 transition-colors cursor-pointer"
                id="btn-clear-cart"
                onClick={clearCart}
                title="Kosongkan seluruh keranjang belanja"
              >
                <Trash2 size={16} />
              </button>

              <button
                className="grow inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#0080ff] to-[#0059b3] text-white px-5 py-3 rounded-[6px] font-bold text-sm hover:from-[#0091ff] hover:to-[#0066d6] transition-all cursor-pointer"
                id="btn-checkout"
                onClick={handleCheckout}
              >
                <span>Checkout Sekarang</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
