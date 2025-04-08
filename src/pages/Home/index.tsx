import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <img src="/img/icons/logo_ufolep.png" alt="logo_ufolep" style={{ maxWidth: '200px', marginBottom: '20px' }} />

            <h1>Bienvenue à notre application UFOLEP</h1>
            <p>Précision, maîtrise, victoire – Atteignez votre cible avec nous !🎯</p>

            <Link to="/login">
                <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Se connecter</button>
            </Link>
        </div>
    );
};

export default Home;

