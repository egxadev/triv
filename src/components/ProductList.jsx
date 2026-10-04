import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OFFICIAL_PRODUCTS = [
  {
    id: 'hoodie-01',
    name: 'Triv Exclusive Bearish/Bullish Hoodie',
    price: 350000,
    category: 'Official Merchandise',
    image: '/assets/merchandise/hoodie-merch.jpg',
    description: 'Hoodie resmi Triv dengan grafis Bearish vs Bullish.',
    badge: 'Popular'
  },
  {
    id: 'watch-01',
    name: 'Xiaomi Watch S1 Active (Triv Edition)',
    price: 1899000,
    category: 'Smart Gadget',
    image: '/assets/merchandise/smartwatch.jpg',
    description: 'Smartwatch sporty dengan pelacak aktivitas harian dan baterai tahan lama.',
    badge: 'Quest Prize'
  },
  {
    id: 'ledger-01',
    name: 'Ledger Nano X Hardware Wallet (Triv Edition)',
    price: 2450000,
    category: 'Hardware Wallet',
    image: '/assets/merchandise/ledger-nano.jpg',
    description: 'Hardware wallet untuk menyimpan aset kripto secara aman.',
    badge: 'Security'
  },
  {
    id: 'shirt-01',
    name: 'Triv Pro Trader Oversized T-Shirt',
    price: 185000,
    category: 'Apparel',
    image: '/assets/merchandise/oversized-tshirt.jpg',
    description: 'Kaos bahan katun combed dengan sablon logo Triv.',
    badge: 'New'
  },
  {
    id: 'tumbler-01',
    name: 'Triv Thermal Smart Tumbler 500ml',
    price: 175000,
    category: 'Accessories',
    image: '/assets/merchandise/smart-tumbler.jpg',
    description: 'Tumbler stainless steel 500ml dengan indikator suhu LED.',
    badge: 'Best Value'
  },
  {
    id: 'cap-01',
    name: 'Triv Snapback Cap #SemuaBisaMenang',
    price: 120000,
    category: 'Accessories',
    image: '/assets/merchandise/snapback-cap.jpg',
    description: 'Topi snapback kasual dengan bordir logo Triv.',
    badge: 'Essential'
  }
];


export default function ProductList({ onProductAdded }) {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });

    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);

    if (onProductAdded) {
      onProductAdded(product);
    }
  };

  const formatIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <section className="py-[60px] md:pt-[60px] md:pb-[80px] bg-[#0a101b]" id="triv-store-section">
      <div className="container mx-auto px-5">
        <h2 className="font-heading text-2xl sm:text-[32px] font-extrabold text-white mb-3">
          Triv Official Store & Merchandise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]" id="product-grid">
          {OFFICIAL_PRODUCTS.map((product) => {
            const isJustAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                className="bg-[#121a27] border border-white/8 rounded-2xl overflow-hidden flex flex-col relative transition-all duration-250 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:border-[#0080ff]/40 hover:shadow-[0_15px_35px_rgba(0,128,255,0.2)] group"
                id={`product-${product.id}`}
              >
                {product.badge && (
                  <span className="absolute top-3.5 left-3.5 bg-triv-blue text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full z-[2]">
                    {product.badge}
                  </span>
                )}
                
                <div className="h-[200px] bg-[#0d1522] flex items-center justify-center p-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[160px] w-auto object-contain transition-transform duration-250 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <span className="text-xs text-triv-cyan font-semibold uppercase tracking-[0.5px] mb-1.5">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-[1.35]">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-triv-muted leading-relaxed mb-5 grow">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between gap-3 border-t border-white/5 pt-4">
                    <div className="font-heading text-[19px] font-extrabold text-white">
                      {formatIDR(product.price)}
                    </div>
                    <button
                      className={`inline-flex items-center gap-2 text-white px-4 py-2.5 rounded-[6px] text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-500'
                          : 'bg-triv-blue hover:bg-triv-blue-hover hover:-translate-y-px'
                      }`}
                      id={`btn-add-${product.id}`}
                      onClick={() => handleAddToCart(product)}
                      disabled={isJustAdded}
                      aria-label={`Tambah ${product.name} ke Keranjang`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={18} />
                          <span>Berhasil Ditambah!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={18} />
                          <span>Tambah ke Keranjang</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
