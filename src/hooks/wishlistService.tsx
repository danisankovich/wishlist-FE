import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWishlist } from '../interfaces/wishlist';

const initialWishlist: IWishlist = {
    id: '', title: '', private: false, items: []
}

function getWishlist(wishlistId: string, wishlistItems: IWishlist[]): IWishlist {
    return wishlistItems.find((wishlist: IWishlist) => wishlist.id === wishlistId) || initialWishlist;
}

export default function useWishlistService() {
    const { wishlistId } = useParams();
    const [ currentWishlist, setCurrentWishlist ] = useState<IWishlist>(initialWishlist)
    const [ wishlistItems, setWishlistItems ] = useState<IWishlist[]>([])
    const [ wishlistIds, setWishlistIds ] = useState<[]>([])

    useEffect(() => {
        getWishlistItems();
    }, [])

    useEffect(() => {
        if (wishlistId && wishlistItems.length) {
            setCurrentWishlist(getWishlist(wishlistId, wishlistItems))
        }
    }, [wishlistId, wishlistItems.length])

    async function getWishlistItems() {
        try {
            const response = await axios.get('http://localhost:5000/wishlists')
            if (!response.data) {
                throw new Error('No Data')
            }
            setWishlistItems(response.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error('Axios Error: ', err);
              } else {
                console.error('Error: ', err);
              }
              setWishlistItems([]);
        }
    }

    return {
        currentWishlist,
        getWishlist,
        getWishlistItems,
        wishlistItems,
        wishlistIds
    }
}
