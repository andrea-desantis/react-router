import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function Dettaglio() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            // .get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProdotto(resp.data);
            })
            .catch((err) => {
                console.log(err);
                // if (err.status === 404) {
                //     navigate("/prodotti");
                // }
            })
    }, [id]);

    return (
        <>
            {prodotto !== null && (
                <div>
                    <img src={prodotto} alt="" />
                    <div>
                        <h2>{prodotto.title}</h2>
                        <p>{prodotto.description}</p>

                    </div>

                </div>
            )}
        </>
    );
}