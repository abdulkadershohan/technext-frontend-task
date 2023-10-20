import { filterSearchContext } from "./context/filterSearchContext";
import useValue from "./hooks/useValue";
import HomePage from "./page/home/HomePage";

function App() {
  const value = useValue()
  return (
    <filterSearchContext.Provider value={value}>
      <main className="bg-main">
        <HomePage />
      </main>
    </filterSearchContext.Provider>
  );
}

export default App;
