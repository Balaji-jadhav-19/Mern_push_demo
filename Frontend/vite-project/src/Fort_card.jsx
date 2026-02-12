import "./Fort_card.css";

const Fort_card = ({ fort }) => {
    return (
        <div className="fort-card">
            <img src={fort.image} alt={fort.name} />
            <h3>{fort.name}</h3>
            <p className="location">{fort.location}</p>
            <p>{fort.description}</p>
        </div>
    );
};

export default Fort_card;
