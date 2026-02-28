export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg
                className="mb-4 h-16 w-16 text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
            </svg>
            <h3 className="text-lg font-semibold text-slate-500">No results found</h3>
            <p className="mt-1 text-sm text-slate-400">No users match your search. Try a different query.</p>
        </div>
    );
}
