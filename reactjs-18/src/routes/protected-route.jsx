import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "@/providers/auth-provider"

export const ProtectedRoute = () => {
  const { token } = useAuth()

  // FIXME: Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />
  }

  // If authenticated, render the child routes
  return <Outlet />
}
