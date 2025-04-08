import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [licenseNumber, setLicenseNumber] = useState<string>("");
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (licenseNumber.trim().length > 0) {
            history.push("/administrateur"); // Redirection après la connexion
        } else {
            alert("Veuillez entrer votre numéro de licence.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) { // Autoriser uniquement les chiffres
            setLicenseNumber(value);
        }
    };
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2
                style={{
                    fontSize: "26px",
                    marginBottom: "20px",
                    borderRadius: "20px", // Plus arrondi
                    backgroundColor: "#e0f7fa", // Couleur douce
                    padding: "15px 30px", // Plus de padding pour un effet plus doux
                    display: "inline-block",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Ombre douce
                }}
            >
                Veuillez mentionner votre numéro de licence
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={licenseNumber}
                    onChange={handleInputChange}
                    placeholder="Numéro de licence"
                    required
                    maxLength={10} // Ajuster si nécessaire
                    style={{
                        padding: "12px",
                        fontSize: "18px",
                        width: "240px",
                        textAlign: "center",
                        borderRadius: "8px", // Légèrement arrondi
                        border: "1px solid #ccc",
                        outline: "none",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Ombre douce sur le champ de saisie
                    }}
                />
                <br />
                <button
                    type="submit"
                    style={{
                        marginTop: "15px",
                        padding: "12px 30px",
                        fontSize: "18px",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "#007bff",
                        color: "white",
                        borderRadius: "8px", // Légèrement arrondi
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Ombre douce sur le bouton
                    }}
                >
                    Entrer
                </button>
            </form>
        </div>
    );
};

export default Login;










