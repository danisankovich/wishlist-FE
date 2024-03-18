import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWishlist } from '../interfaces/wishlist';
import { IUserDetails } from '../interfaces/userDetails';

function getWishlist(wishlistId: string, wishlistItems: IWishlist[]): IWishlist {
    return wishlistItems.find((wishlist: IWishlist) => wishlist.id === wishlistId) || initialWishlist;
}

const initialWishlist = {
    id: '', title: '', items: [], private: false
}

const initialUser = {
    "friends": [],
    "contact": {
        "email": "",
        "phone": ""
    },
    "details": {
        "firstName": "",
        "lastName": ""
    },
    "wishlistIds": [],
    "wishlists": []
}

export default function useWishlistService() {
    const { wishlistId } = useParams();
    const [ currentWishlist, setCurrentWishlist ] = useState<IWishlist>(initialWishlist)
    const [ userDetails, setUserDetails ] = useState<IUserDetails>(initialUser)
    const [ wishlistIds, setWishlistIds ] = useState<string[]>([])
    // const [ wishlistItems, setWishlistItems ] = useState<IWishlist[]>([])

    useEffect(() => {
        getUserDetails();
    }, [])

    useEffect(() => {
        if (wishlistId && userDetails && userDetails.wishlists) {
            setCurrentWishlist(getWishlist(wishlistId, userDetails.wishlists))
        }
    }, [wishlistId, userDetails.wishlists.length])

    // async function getWishlistItems() {
    //     try {
    //         const response = await axios.get('http://localhost:5000/wishlists')
    //         if (!response.data) {
    //             throw new Error('No Data')
    //         }
    //         setWishlistItems(response.data);
    //     } catch (err) {
    //         if (axios.isAxiosError(err)) {
    //             console.error('Axios Error: ', err);
    //           } else {
    //             console.error('Error: ', err);
    //           }
    //           setWishlistItems([]);
    //     }
    // }

    async function getUserDetails() {
        try {
            const response = await axios.get('http://localhost:5000/userDetails?aggregatedWishlists=True')
            if (!response.data) {
                throw new Error('No Data')
            }
            setUserDetails(response.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error('Axios Error: ', err);
              } else {
                console.error('Error: ', err);
              }
              setUserDetails(initialUser);
        }
    }

    return {
        currentWishlist,
        userDetails,
    }
}
