import useCard from "../../hooks/useCard/useCard";
import { CardContext } from "./CardContext";


const CardProvider = ({ children }) => {
    const {cards, setCards} = useCard();
  return (
    <CardContext.Provider value={{ cards, setCards }}>
        { children }
    </CardContext.Provider>
    
  )
}

export default CardProvider