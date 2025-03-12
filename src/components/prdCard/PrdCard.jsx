import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewWishlistThunk, deleteWishlistThunk } from '../../../store/WishlistStore';

const PrdCard = ({ products }) => {
    var [data, setData] = useState([])
    const [wishlist, setWishlist] = useState([]);
    const navigator = useNavigate();
    // const prd = useSelector((state) => state.prd.items || [])
    // console.log(products);
    const wishlistData = useSelector((state) => state.wishlist.items || [])

    const dispatch = useDispatch();

    useEffect(() => {
        setWishlist(wishlistData);
        setData(products);
    }, [products, wishlistData])


    const goToDetails = (id) => {
        navigator("/Details/" + id)
    }


    const addToWishlist = async (prd) => {
        try {
            // console.log(wishlist)
            const isExist = wishlist.findIndex(item => item.id === prd.id)
            console.log(isExist);
            if (isExist >= 0) {
                dispatch(deleteWishlistThunk(prd.id));
                alert("prd deleted")
                return;
            }
            // console.log("before added :" + prd);
            dispatch(addNewWishlistThunk(prd))
        } catch (error) {
            console.error("Error:", error);
        }

    }
    return (
        <>
            {data?.map((item) =>
                <Card key={item.id} className="col-lg-3 col-6 my-2 border-0" >
                    <Card.Img variant="top" className="img-fluid" src={item.image} onClick={() => { goToDetails(item.id) }} />
                    <Card.Body>
                        <div className="row" onClick={() => { addToWishlist(item) }}>
                            <span className="col-md-10">{item.title}</span>
                            <i className={` fa-heart fs-4 col-2 ${wishlist?.findIndex(prd => prd.id == item.id) == -1 ? "fa-regular" : "fa-solid text-danger"}`} ></i>
                        </div>
                        <Card.Text className="bg-danger badge">
                            {item.price}
                        </Card.Text>

                    </Card.Body>
                </Card>
            )
            }

        </>
    )
}

export default PrdCard