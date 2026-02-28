import TableHeader from './TableHeader';
import TableRow from './TableRow';
import LoadingSpinner from '../states/LoadingSpinner';
import ErrorMessage from '../states/ErrorMessage';
import EmptyState from '../states/EmptyState';

export default function Table({ columns, data, sortConfig, onSort, loading, error }) {
    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;
    if (!data || data.length === 0) return <EmptyState />;

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
                <TableHeader columns={columns} sortConfig={sortConfig} onSort={onSort} />
                <tbody className="divide-y divide-slate-100">
                    {data.map((row) => (
                        <TableRow key={row.id} row={row} columns={columns} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
