import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Nav(props) {
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <Link href="/" className="nav-link px-2 text-secondary ">
                    Home{" "}
                </Link>
            </li>
            <li>
                <Link href="/secrete" className="nav-link px-2 text-white">
                    <i className="bi bi-shield-lock"></i>
                    Secrete
                </Link>
            </li>
            
        </ul>
    );
}
