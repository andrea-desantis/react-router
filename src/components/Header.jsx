import { NavLink } from "react-router-dom";
export default function Header() {
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Chi siamo",
            path: "/chi-siamo",
        },
        {
            title: "Prodotti",
            path: "/prodotti",
        }
    ]
    return (
        <header className="navbar bg-body-tertiary">
            <section className="container-fluid">
                <h1 className="">React Router Store</h1>
                <ul className="">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </section>


        </header>
    );
}