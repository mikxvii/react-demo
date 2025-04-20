import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // allows for future values to be added to the user object
    // without having to change the type of the user object
    const [user, setUser] = useState<AuthUser| null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Mike', 
            email: 'mikxvii@berkeley.edu'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}