import { useContext } from "react";
import { CardContext } from "../context/CardContext/CardContext";
import Card from "../components/molecules/Card/Card";
import "./Cards.css";

const Cards = () => {
    const { cards } = useContext(CardContext);
    return (
        <main className="main-container">
            <h2 className="title">Cartas</h2>
            {
                cards.map((card) => (
                    <div>
                        <Card 
                            imageUrl={ card.imageUrl }
                            name={ card.name }
                            type={ card.type }
                            text={ card.text }
                        />
                    </div>
                ))
            }
        </main>    
    )
}

export default Cards