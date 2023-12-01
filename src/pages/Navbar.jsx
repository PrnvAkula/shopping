import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="navbar-brand">Markoth</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="shop">Shop</Link>
                            <Link className="nav-link" to="cart">Bidding Cart</Link>
                            <Link className="nav-link" to="profile">Your Profile</Link>

                        </div>
                        <form className="d-flex ms-auto" role="LogOut">
                            <Link button className="btn btn-outline-danger" type="submit" to="login">
                                Log Out
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar