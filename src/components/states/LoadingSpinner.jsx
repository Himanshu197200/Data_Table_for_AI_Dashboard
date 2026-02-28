export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
            <p className="mt-4 text-sm font-medium text-slate-500">Loading data…</p>
        </div>
    );
}
