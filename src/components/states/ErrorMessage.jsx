export default function ErrorMessage({ message }) {
    return (
        <div className="mx-auto my-8 max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center shadow-sm">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <h3 className="text-lg font-semibold text-red-700">Something went wrong</h3>
            <p className="mt-1 text-sm text-red-600">{message}</p>
            <p className="mt-3 text-xs text-red-400">Try refreshing the page or check the API URL.</p>
        </div>
    );
}
