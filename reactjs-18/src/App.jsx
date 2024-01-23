import Routes from "@/routes"

import AuthProvider from "@/providers/auth-provider"
import QueryProvider from "@/providers/query-provider"

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryProvider>
  )
}

export default App
