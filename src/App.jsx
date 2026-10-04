import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PromoBanner from './components/PromoBanner';
import QuestRewards from './components/QuestRewards';
import TrivHeroes from './components/TrivHeroes';
import SideQuests from './components/SideQuests';
import RegistrationSection from './components/RegistrationSection';
import Leaderboard from './components/Leaderboard';
import RulesAccordion from './components/RulesAccordion';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function MainApp() {
  const [activeTab, setActiveTab] = useState('competition');

  return (
    <div className="min-h-screen bg-triv-dark text-white font-main selection:bg-triv-blue selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'competition' ? (
          <>
            <HeroSection
              onRegisterClick={() => {
                const el = document.getElementById('registration');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <PromoBanner />
            <QuestRewards />
            <TrivHeroes />
            <SideQuests />
            <RegistrationSection />
            <Leaderboard />
            <RulesAccordion />
            <ProductList />
          </>
        ) : (
          <div className="py-8">
            <ProductList />
          </div>
        )}
      </main>

      <Cart />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </RecoilRoot>
  );
}
