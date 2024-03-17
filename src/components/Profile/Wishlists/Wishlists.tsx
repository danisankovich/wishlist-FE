import { Link } from "react-router-dom";
import { getWishlistItems, IWishlist } from "../../../services/wishlist";

export default function Wishlists() {    
    return (
        <>
            <ul>
                {getWishlistItems().map((wishlist: IWishlist) => (
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