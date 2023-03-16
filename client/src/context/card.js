import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    let existingCard = localStorage.getItem("card");
    if (existingCard) setCard(JSON.parse(existingCard));
  }, []);

  return (
    <CardContext.Provider value={[card, setCard]}>
      {children}
    </CardContext.Provider>
  );
};

const useCard = () => useContext(CardContext);

export { useCard, CardProvider };
