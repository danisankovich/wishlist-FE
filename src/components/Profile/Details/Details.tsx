

export default function Details() {
    const details = {
        firstName: 'Firstname',
        lastName: 'Lastname',
    }
    return (
        <div>
            <h2>User Details</h2>
            <h3>Name: {details.firstName} {details.lastName}</h3>
        </div>
    
    )
}