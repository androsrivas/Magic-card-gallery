import "./Card.css";

function Card({ imageUrl, name, type, text }) {
  
  
  return (
    <>
          <div className="card">
            <div className="img-container">
                <img className="card-img" src={imageUrl} alt={name } />
            </div>
            <section className="card-info">
                <h3>{name}</h3>
                <h4>Type</h4>
                <p>{type }</p>
                <h4>Description</h4>
                <p>{text }</p>
            </section>
        </div>
    </>
  )
}

export default Card