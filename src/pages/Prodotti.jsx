import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(res => {
                setProdotti(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);



    return (
        <>

            <main>
                <ul className="d-flex row gap-3">
                    {prodotti.map(prod => (
                        <li key={prod.id} className="card col-3">
                            <img src={prod.image} alt="" />
                            <div>
                                <h5>{prod.title}</h5>
                                <h6>{prod.category}</h6>
                                <p>{prod.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>

        </>
    );
}
