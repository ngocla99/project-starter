import { redirect } from "next/navigation"

export default function ProtectedAuthLayout({
  children,
}: React.PropsWithChildren) {
  // check if user is logged in
  const user = false

  if (user) {
    redirect("/")
  }

  return <>{children}</>
}
