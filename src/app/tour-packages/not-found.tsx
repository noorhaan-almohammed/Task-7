
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-grey text-center px-4">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-50 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-200 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-orange text-white rounded-full text-lg font-semibold hover:bg-orange-500 transition"
      >
        Go Back Home
      </Link> 
    </div>
  );
}
