import { Link, useRouteError } from "react-router-dom"

import { Button } from "@/components/ui/button"

const ErrorBoundary = () => {
  const error = useRouteError()
  console.log("🚀 ~ ErrorBoundary ~ error:", error)

  return (
    <section>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <Link
        to={"/"}
        className="bg-neutral-dark-blue text-neutral-white rounded-md p-2"
      >
        <Button>Back Home</Button>
      </Link>
    </section>
  )
}

export default ErrorBoundary
