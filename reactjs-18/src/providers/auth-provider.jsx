import { createContext, useContext, useMemo, useReducer } from "react"
import axiosClient from "@/api/axios"

// Create the authentication context
const AuthContext = createContext()

// Define the possible actions for the authReducer
const ACTIONS = {
  setToken: "setToken",
  clearToken: "clearToken",
}

// Reducer function to handle authentication state changes
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setToken:
      // Set the authentication token in axios headers and local storage
      axiosClient.defaults.headers.common["Authorization"] =
        "Bearer " + action.payload
      localStorage.setItem("token", action.payload)

      return { ...state, token: action.payload }
    case ACTIONS.clearToken:
      // Clear the authentication token from axios headers and local storage
      delete axiosClient.defaults.headers.common["Authorization"]
      localStorage.removeItem("token")

      return { ...state, token: null }
    // Handle other actions (if any)

    default:
      console.error(
        `You passed an action.type: ${action.type} which doesn't exist`
      )
  }
}

// Initial state for the authentication context
const initialData = {
  token: localStorage.getItem("token"),
}

const AuthProvider = ({ children }) => {
  // Use reducer to manage the authentication state
  const [state, dispatch] = useReducer(authReducer, initialData)

  const setToken = (newToken) => {
    dispatch({ type: ACTIONS.setToken, payload: newToken })
  }

  const clearToken = () => {
    dispatch({ type: ACTIONS.clearToken })
  }

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      ...state,
      setToken,
      clearToken,
    }),
    [state]
  )

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

// Custom hook to easily access the authentication context
export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
