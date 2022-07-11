import bulbasaurImage from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  return (
    <div className="showcaseMain">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaurImage} alt="bulbasaur" className="pokeImage" />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="pokeType">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="pokeMove">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
