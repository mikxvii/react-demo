import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser({
            name: 'Mike',
            email: 'mikxvii@gmail.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.name} </div>
        </div>
    )
}
