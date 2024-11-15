import { useContext } from "react";
import { CardContext } from "../context/CardContext/CardContext";
import Card from "../components/molecules/Card/Card";


const Cards = () => {
    const { cards } = useContext(CardContext);
    return (
        <>
            {
                cards.map((card) => {
                    <Card 
                        imageUrl={  card.imageUrl }
                        name={ card.name }
                        type={ card.type }
                        originaltext={ card.originaltext }
                    />
                })
            }
        </>    
  )
}

export default Cards