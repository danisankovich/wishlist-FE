interface IWishlist {
    id: string;
    title: string;
    items: string[];
    private?: boolean;
}

const wishlistIds: string[] = [ // list of ids of wishlists user has made
    '1234',
    '5678',
    '9123',
    'badid' // to make sure only valid ids get a wishlist
];
// setting it up like this to more closely mimic what structure will be like once DB is hooked up
// we will only render those which are included in the wishlistIds list
const wishlistData: IWishlist[] = [
    { id: '1234', title: '1234 Wishlist', items: ['item1', 'item2', 'item3'], private: false },
    { id: '5678', title: '5678 Wishlist', items: ['item4', 'item5', 'item6'], private: true },
    { id: 'xxxx', title: 'xxx Wishlist', items: ['item10', 'item11', 'item12'], private: false },
    { id: '9123', title: '9123 Wishlist', items: ['item7', 'item8', 'item9'], private: false },
]


function getWishlistItems(): IWishlist[] {
    return wishlistData.filter((wishlistItem: IWishlist) => wishlistIds.includes(wishlistItem.id));
}

export {
    getWishlistItems,
    wishlistIds,
    wishlistData,
}

export type {
    IWishlist
}