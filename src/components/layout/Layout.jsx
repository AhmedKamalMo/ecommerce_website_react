import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navv from '../header/Navbar';
import { fetchDataThunk } from '../../../store/productStor';
import { fetchDataThunkWishlist } from '../../../store/WishlistStore';
import { fetchUsrDataThunk } from '../../../store/userStore';

function Layout() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk())
    dispatch(fetchDataThunkWishlist())
    dispatch(fetchUsrDataThunk())
  }, [dispatch])



  return (

    <>
      <Navv />
      <Outlet />

    </>
  );
}

export default Layout;