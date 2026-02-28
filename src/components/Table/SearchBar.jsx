export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full max-w-md">
            <label htmlFor="search-input" className="sr-only">
                Search users
            </label>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                </svg>
            </div>
            <input
                id="search-input"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search by name…"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm transition-all placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
        </div>
    );
}
