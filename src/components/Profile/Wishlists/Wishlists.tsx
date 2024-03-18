import { Link } from "react-router-dom";
import useWishlistService from "../../../hooks/wishlistService";
import { IWishlist } from "../../../interfaces/wishlist";

export default function Wishlists() {   
    const { userDetails } = useWishlistService(); 
    return (
        <>
            <ul>
                {userDetails && userDetails.hasOwnProperty('wishlists') && userDetails.wishlists.map((wishlist: IWishlist) => (
                    <li key={wishlist.id}>
                        <Link
                            to={`/wishlist/${wishlist.id}`}
                            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                        >{wishlist.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}