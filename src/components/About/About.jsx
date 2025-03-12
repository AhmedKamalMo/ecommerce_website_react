import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container-fluid py-5 text-center bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-4 fw-bold mb-4 text-dark">Who We Are</h1>
            <p className="lead text-muted mx-auto mb-4 w-75">
                Welcome to our fashion haven! We curate high-quality, trendy, and comfortable clothing
                tailored for every occasion. Our mission is to make fashion accessible, affordable,
                and effortlessly stylish for everyone. Explore our collection and elevate your wardrobe today!
            </p>
            <div className="row g-4 w-75">
                <div className="col-md-6">
                    <img
                        src="https://i.pinimg.com/736x/15/c8/57/15c857d2cdd7eb6bda0dc916d1f29402.jpg"
                        alt="Fashion Store"
                        className="img-fluid rounded shadow-lg"
                    />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center text-start">
                    <h2 className="h3 fw-semibold text-dark mb-3">Our Vision</h2>
                    <p className="text-muted">
                        We believe fashion is more than just clothing; its a statement, a lifestyle, and a way to express yourself.
                        Our vision is to inspire confidence and creativity through stylish, high-quality apparel that fits every personality.
                    </p>
                </div>
            </div>

            <Link
                to="/products"
                className="btn btn-dark btn-lg mt-4  px-5 py-3 fw-semibold shadow-sm" >
                Explore Collection
            </Link>
        </div>
    );
};

export default About;