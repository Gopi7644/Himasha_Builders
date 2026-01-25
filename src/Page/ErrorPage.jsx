import { Link, useRouteError, useNavigate } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="max-w-lg w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/10 text-red-500 p-4 rounded-full animate-pulse">
            <AlertTriangle size={42} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white mb-3">
          404
        </h1>

        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          Page Not Found
        </h2>

        {/* Error Message */}
        <p className="text-gray-400 mb-8">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for does not exist or has been moved."}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-all hover:scale-105"
          >
            <Home size={18} />
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}
