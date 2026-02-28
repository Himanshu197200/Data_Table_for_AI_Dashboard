import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import useSort from '../hooks/useSort';
import usePagination from '../hooks/usePagination';
import { filterByName } from '../utils/filterUtils';
import { Table, SearchBar, Pagination } from '../components/Table';


const API_URL = 'https://jsonplaceholder.typicode.com/users';
const COLUMNS = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: false },
    { key: 'company.name', label: 'Company', sortable: false },
    { key: 'address.city', label: 'City', sortable: false },
];

export default function Dashboard() {
    const { data, loading, error } = useFetch(API_URL);
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300);


    const filtered = filterByName(data, debouncedQuery);


    const { sortConfig, handleSort, sortedData } = useSort(filtered);


    const { currentPage, totalPages, paginatedData, goNext, goPrev, resetPage } =
        usePagination(sortedData, 5);


    useEffect(() => {
        resetPage();
    }, [debouncedQuery]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
            { }
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
                <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-200">
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4v10H3zM10 3h4v17h-4zM17 7h4v13h-4z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">AI Dashboard</h1>
                            <p className="text-xs text-slate-400">User data overview</p>
                        </div>
                    </div>
                </div>
            </header>

            { }
            <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                { }
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <SearchBar value={query} onChange={setQuery} />
                    {!loading && !error && (
                        <p className="text-sm text-slate-400">
                            Showing <span className="font-semibold text-slate-600">{filtered.length}</span> user{filtered.length !== 1 ? 's' : ''}
                        </p>
                    )}
                </div>

                { }
                <Table
                    columns={COLUMNS}
                    data={paginatedData}
                    sortConfig={sortConfig}
                    onSort={handleSort}
                    loading={loading}
                    error={error}
                />

                { }
                {!loading && !error && sortedData.length > 0 && (
                    <div className="mt-4">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onNext={goNext}
                            onPrev={goPrev}
                        />
                    </div>
                )}
            </main>

            { }
            <footer className="border-t border-slate-200 bg-white/60 py-4 text-center text-xs text-slate-400">
                AI Dashboard &copy; {new Date().getFullYear()} &middot; Powered by React &amp; Tailwind CSS
            </footer>
        </div>
    );
}
