import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/home';
import Inventory from '../pages/inventory';
import CasetaRecu from '../pages/caseta-recu';
import Modos from '../pages/modos';
import CapsulaEmbrio from '../pages/capsula-embrio';
import Recompensas from '../pages/recompensas';
import Personajes from '../pages/personajes';
import Mapa from '../pages/mapa';
import DappPresaleNft from '../pages/dapp-presale-nft';
import PresaleIdo from '../pages/presale-ido';
import Desktop1 from '../pages/desktop-1';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/caseta-recu" element={<CasetaRecu />} />
        <Route exact path="/modos" element={<Modos />} />
        <Route exact path="/capsula-embrio" element={<CapsulaEmbrio />} />
        <Route exact path="/recompensas" element={<Recompensas />} />
        <Route exact path="/personajes" element={<Personajes />} />
        <Route exact path="/mapa" element={<Mapa />} />
        <Route exact path="/dapp-presale-nft" element={<DappPresaleNft />} />
        <Route exact path="/presale-ido" element={<PresaleIdo />} />
        <Route exact path="/desktop-1" element={<Desktop1 />} />
      </Routes>
    </Router>
  );
}

export default Routers;
