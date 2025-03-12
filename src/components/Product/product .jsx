import { useSelector } from "react-redux";
import PrdCard from "../prdCard/PrdCard";


const Product = () => {
    const state = useSelector((state) => state.prd || [])
    const prd = state.items
    const isLoading = state.isLoading;
    const error = state.error;

    return (
        <div className="row m-0">
            {isLoading && <div className="d-flex justify-content-center align-items-center " style={{ height: "200px" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}

            {error && <p style={{ color: "red" }}>err : {error}</p>}

            {(!isLoading && !error) && <PrdCard products={prd} />}

        </div>
    )
}

export default Product 