import { useState, useEffect } from "react";
import { 
    getAllCards as getCardsFromAPI
} from "../../services/APIservice";


const useCard = () => {
    const [cards, setCards] = useState([]);

    const fetchCardsFromAPI = async() => {
        const cardsFromAPI = await getCardsFromAPI();
        setCards(cardsFromAPI);
    }

    useEffect(() => {
        fetchCardsFromAPI()
    }, [])
  return {
    cards,
    setCards
  }
}

export default useCard