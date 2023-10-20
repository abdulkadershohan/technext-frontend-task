import { useState } from "react";
import { filterSearchContext } from "./context/filterSearchContext";
import HomePage from "./page/home/HomePage";

function App() {
  const [check, setCheck] = useState<boolean>(false)
  const [filterByDate, setFilterByDate] = useState('')
  const [filterByStatus, setFilterByStatus] = useState('')
  const [search, setSearch] = useState('')
  const [isUpcoming, setIsUpcoming] = useState<boolean>(false)
  const value = {
    check,
    setCheck,
    filterByDate,
    setFilterByDate,
    filterByStatus,
    setFilterByStatus,
    search,
    setSearch,
    isUpcoming,
    setIsUpcoming
  }
  return (
    <filterSearchContext.Provider value={value}>
      <main className="bg-main">
        <HomePage />
      </main>
    </filterSearchContext.Provider>
  );
}

export default App;
