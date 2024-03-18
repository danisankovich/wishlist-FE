import { IWishlist } from "./wishlist";

interface IUserDetails {
    friends: string[];
    contact: {
        email: string;
        phone: string;
    };
    details: {
        firstName: string;
        lastName: string;
    };
    wishlistIds: string[];
    wishlists: IWishlist[];
}

export type { IUserDetails };