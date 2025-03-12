import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-light min-vh-100 text-center p-4">
            <div>
                <h1 className="display-4 fw-bold text-dark mb-4">Welcome </h1>
                <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: "600px" }}>
                    Discover the latest fashion trends and elevate your style with our exclusive collections.
                    Quality, comfort, and elegance – all in one place.
                </p>
                <Link
                    to="/products"
                    className="btn btn-dark btn-lg px-5 py-3 fw-semibold shadow-sm"
                >
                    Shop Now
                </Link>
            </div>
            <div className="row mt-5 w-75">
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm p-4">
                        <h2 className="h5 fw-semibold">New Arrivals</h2>
                        <p className="text-muted">Stay trendy with our latest fashion picks.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm p-4">
                        <h2 className="h5 fw-semibold">Best Sellers</h2>
                        <p className="text-muted">Discover our most loved and popular items.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm p-4">
                        <h2 className="h5 fw-semibold">Exclusive Offers</h2>
                        <p className="text-muted">Get the best deals and discounts now.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
