import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.log("🚀 ~ ErrorBoundary ~ error:", error);

  return (
    <section>
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <Link
        to={"/"}
        className="p-2 bg-neutral-dark-blue text-neutral-white rounded-md"
      >
        <Button>Back Home</Button>
      </Link>
    </section>
  );
};

export default ErrorBoundary;
