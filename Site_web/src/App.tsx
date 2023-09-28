import './App.css';

import { Home } from './pages/Home';
import { Informations } from './pages/Informations';
import { Auth } from './pages/Auth';

import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <main className='place-content-center min-w-screen'>

      <header className='mb-20 ml-4 mr-4 bg-clip-padding pb-8 bg-gradient-to-r from-zinc-600 to-zinc-300 rounded-3xl'>
        <section className='flex mb-10 bg-gradient-to-r from-zinc-800 to-zinc-400 rounded-3xl'>
          <img className='shrink-0' src="images/Logo.png" alt="Logo de Tout-prêt" width="200px" height="200px" />
          <NavLink className='font-size lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-extrabold mt-20 pt-2 text-slate-300 overflow-hidden' to ="/">Tout-prêt</NavLink>
        </section>

        <nav className='flex ml-10 pl-6 mr-10 text-2xl text-slate-300'>
          <NavLink className='mr-6 justify-normal hover:underline' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/">Accueil</NavLink>
          <NavLink className='mr-6 justify-normal hover:underline' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/about">À propos de nous</NavLink>        
          <NavLink className='order-last justify-end hover:underline' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/auth">S'inscrire / Se connecter</NavLink>
        </nav>

      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Informations />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <footer>
        <section className='flex justify-center bg-zinc-800'>
          <p className='text text-slate-300'>© 2023 Tout-prêt, plateforme d'échange d'objets entre particuliers</p>
        </section>
      </footer>

    </main>
  );
}

export default App;
