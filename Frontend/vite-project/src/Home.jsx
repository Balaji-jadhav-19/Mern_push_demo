import "./home.css";
import Fort_card from "./Fort_card";
import fortsData from "./data/fortsData";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <img
                    src="https://vl-prod-static.b-cdn.net/system/images/000/767/209/3c239eff87f019ca582f682733423902/original/raigad-fort-awesome-view.jpg"
                    alt="Raigad Fort"
                    className="home-image"
                />

                <div className="overlay">
                    <h1>Raigad Fort</h1>
                    <p>Capital of Swarajya</p>
                    <span>Chhatrapati Shivaji Maharaj</span>
                </div>
            </div>

            <div className="forts-container">
                {fortsData.map((fort) => (
                    <Fort_card key={fort.id} fort={fort} />
                ))}
            </div>
        </>
    );
};

export default Home;
