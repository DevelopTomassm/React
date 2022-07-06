import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Pokemons } from "./components/Pokemon/Pokemon";
import { CharactersRickAndMorty } from "./components/RickAndMorty/Characters";
import { Simpsons } from "./components/Simpsons/Characters";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charactersRAM" element={<CharactersRickAndMorty />} />
        <Route path="/charactersS" element={<Simpsons />} />
        <Route path="/charactersP" element={<Pokemons />} />
      </Routes>
    </div>
  );
}

export default App;
