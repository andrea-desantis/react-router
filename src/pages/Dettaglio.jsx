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
                //  if (err.response.status === 404) {
                //    navigate("/prodotti");
                // }
            })
    }, [id]);

    return (
        <>
            {prodotto !== null && (
                <div className="d-flex">
                    <img src={prodotto.image} alt="" />
                    <div className="p-5 ">
                        <h2 className="">{prodotto.title}</h2>
                        <h5 className="">{prodotto.category}</h5>
                        <p className="py-2">{prodotto.description}</p>
                        <div className="d-flex justify-content-between">
                            <p>{prodotto.price} $</p>
                            <p>{prodotto.rating.rate}/5</p>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/prodotti/${prodotto.id - 1}`)}>Prodotto precedente</button>
                            <button onClick={() => navigate(`/prodotti/${prodotto.id + 1}`)}>Prodotto successivo</button>
                        </div>
                        <div>
                            <button onClick={() => navigate("/prodotti")}>torna ai prodotti</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}