import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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

            <main className="">
                <ul className="row g-1">
                    {prodotti.map(prod => (

                        <li key={prod.id} className="card col-12 col-sm-6 col-md-4 col-lg-3">
                            <img src={prod.image} alt="" />
                            <div className="">
                                <h5>{prod.title}</h5>
                                <h6>{prod.category}</h6>
                                <Link
                                    to={`/prodotti/${prod.id}`}
                                    className="btn btn-primary mt-2" 
                                >
                                dettagli 
                                </Link>


                            </div>
                        </li>
                    ))}
                </ul>
            </main>

        </>
    );
}
