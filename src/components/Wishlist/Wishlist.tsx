import useWishlistService from '../../hooks/wishlistService';

export default function Wishlist() {
    const { currentWishlist } = useWishlistService();

    return (
        <>{currentWishlist && currentWishlist.id && <div>
            <h2>{currentWishlist.title}</h2>
            <ul>
                {currentWishlist.items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
        }
    </>
        
    )
}