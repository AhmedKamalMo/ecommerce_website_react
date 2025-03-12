import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navv from "../header/Navbar";
import PrdCard from "../prdCard/PrdCard";
import { fetchDataThunkWishlist } from "../../../store/WishlistStore";

const Favorites = () => {
    const wishlistData = useSelector((state) => state.wishlist.items || [])
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchDataThunkWishlist())
    }, [])

    const calculateTotalPrice = () => {
        var totalPrice = 0;
        wishlistData.forEach((item) => {
            totalPrice += Number(item.price.replace(/[^\d.]/g, ''));
        })
        return totalPrice;
    }
    var total = useMemo(() => calculateTotalPrice(), [wishlistData])

    console.log("total " + total);

    return (
        <div className="row m-0 ">
            <Navv />
            {/* <h1> total price:  {total}</h1> */}

            <PrdCard products={wishlistData} />

            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow mb-4">
                <h3 className="fw-bold text-dark m-0">Total Price : <span className="text-success">${total}</span></h3>
            </div>
        </div >
    )
}

export default Favorites