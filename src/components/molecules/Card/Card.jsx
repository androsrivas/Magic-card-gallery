import { useContext } from "react";
import { CardContext } from "../../../context/CardContext/CardContext";
import "./Card.css";

function Card() {
  const { cards } = useContext(CardContext);
  
  return (
    <>
      {
        cards.map((card) => {
          <div className="card">
            <div className="img-container">
                <img className="card-img" src={ card.imageUrl } alt={ card.name } />
            </div>
            <section className="card-info">
                <h3>{ card.name}</h3>
                <h4>Type</h4>
                <p>{ card.type }</p>
                <h4>Description</h4>
                <p>{ card.originaltext }</p>
            </section>
        </div>
        })
      }
    </>
  )
}

export default Card