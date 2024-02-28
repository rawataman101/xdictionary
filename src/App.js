import "./App.css";
import { useState } from "react";
const words = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [search, setSearch] = useState("");
  const [meaning, setMeaning] = useState("");
  const [hasMeaning, setHasMeaning] = useState(false);

  const handleSearch = () => {
    const foundWord = words.find(
      (word) => word.word.toLowerCase() === search.toLowerCase()
    );

    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the Dictionary.");
    }
    setHasMeaning(true);
  };
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      {hasMeaning && <p>{meaning}</p>}
    </div>
  );
}

export default App;
