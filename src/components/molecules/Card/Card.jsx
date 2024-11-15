import { getAllCards } from "../../../services/APIservice";
import "./Card.css";

function Card() {
  getAllCards();
  return (
    <div className="card">
        <div className="img-container">
            <img className="card-img" src="" alt="" />
        </div>
        <section className="card-info">
            <h3>Card name</h3>
            <h4>Type</h4>
            <p>Card type</p>
            <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestiae optio. Corrupti optio quisquam aliquid quasi quaerat error, amet nemo iusto ipsam asperiores! Error quia maxime inventore quas. Soluta, sint?</p>
        </section>
    </div>
  )
}

export default Card