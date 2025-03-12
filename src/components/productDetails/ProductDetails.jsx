import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetails() {
    var [data, setData] = useState()

    const { id } = useParams();
    console.log(id);
    const getProduct = async () => {
        var data = await fetch("http://localhost:3000/products/" + id);
        data = await data.json();
        console.log(data);
        setData(data);
    }
    useEffect(() => {
        getProduct();
    }, [])
    return (

        <>
            <div className="container">
                {
                    data ?
                        <div key={data.id} className="container my-2">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center">
                                    <img src={data.image} alt="" className="img-fluid" />
                                </div>

                                <div className="col-md-6">
                                    <h2 className="fw-bold mb-3">{data.title}</h2>
                                    <h4 className="fw-bold mb-3">{data.description}</h4>
                                    <h4 className="fw-bold mb-3 bg-danger badge">{data.price}</h4>
                                    <div className="row">
                                        {data.sizes?.map((item, index) => (
                                            <div key={index} className={`col-3 border ${data.availableSizes.includes(item) ? "fw-bold text-success" : "text-danger "}`} >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> : <h2>Not found</h2>
                }
            </div >
        </>


    )
}

export default ProductDetails