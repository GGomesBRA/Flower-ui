import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="text-muted-foreground mb-8 mas-w-md">
        The page you are looking for does not exist.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href={"/"}
          className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg:primary/80 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Go back to dashboard
        </Link>
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        If you think this is an error, please contact support.
      </footer>
    </div>
  );
}

export default NotFoundPage;
