import { useContext } from "react";
import { CardContext } from "../context/CardContext/CardContext";
import Card from "../components/molecules/Card/Card";
import "./Cards.css";

const Cards = () => {
    const { cards } = useContext(CardContext);
    return (
        <main className="main-container">
            <h2 className="title">Cartas</h2>
            <section className="cards-container">
                {
                    cards.map((card) => (
                        <div className="cards" key={ card.id }>
                            <Card 
                                imageUrl={ card.imageUrl }
                                name={ card.name }
                                type={ card.type }
                                text={ card.text }
                            />
                        </div>
                    ))
                }
            </section>
        </main>    
    )
}

export default Cards