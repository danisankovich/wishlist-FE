import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { IWishlist, wishlistData } from "../../services/wishlist";

const initialWishlist: IWishlist = {
    id: '', title: '', private: false, items: []
}

export default function Wishlist() {
    const { wishlistId } = useParams();
    const [ wishlist, setWishlist ] = useState<IWishlist>(initialWishlist)

    useEffect(() => {
        getWishlist()
    }, [wishlistId])

    function getWishlist(): void {
        const wishlist = wishlistData.find((wishlist: IWishlist) => wishlist.id === wishlistId)
        if (wishlist) {
            console.log(wishlist)
            setWishlist(wishlist);
        }
    }

    return (
        <>{wishlist && wishlist.id && <div>
            <h2>{wishlist.title}</h2>
            <ul>
                {wishlist.items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
        }
    </>
        
    )
}