import { createContext } from "react"
import IUserProfile from "../types/UserProfile"

export const UserProfileContext = createContext<IUserProfile | null>(null)

export default UserProfileContext
