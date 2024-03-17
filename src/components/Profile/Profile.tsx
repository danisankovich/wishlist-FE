import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const tabs = {
    friends: ['first last', 'second last', 'third last'],
    contact: {
        email: '#####_#######@gmail.com',
        phone: '(###) ###-####'
    }
}

export default function Profile() {
    return (
        <>
            <h1>PROFILE</h1>

            <ul className="flex border-b">
                <li className="-mb-px mr-1">
                    <Link to="" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">Details</Link>
                </li>
                <li className="mr-1">
                    <Link to="wishlists" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">Wishlists</Link>
                </li>
                <li className="mr-1">
                    <Link to="friends" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">Friends</Link>
                </li>
                <li className="mr-1">
                    <Link to="contact" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">Contact</Link>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </>
    )
}