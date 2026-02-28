export default function TableHeader({ columns, sortConfig, onSort }) {
    return (
        <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                {columns.map((col) => {
                    const isActive = sortConfig.field === col.key;
                    const arrow = isActive
                        ? sortConfig.direction === 'asc'
                            ? ' ▲'
                            : ' ▼'
                        : '';
                    return (
                        <th
                            key={col.key}
                            className={`px-5 py-3 ${col.sortable ? 'cursor-pointer select-none transition-colors hover:text-indigo-600' : ''}`}
                            onClick={() => col.sortable && onSort(col.key)}
                            onKeyDown={(e) => {
                                if (col.sortable && (e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    onSort(col.key);
                                }
                            }}
                            tabIndex={col.sortable ? 0 : undefined}
                            role={col.sortable ? 'button' : undefined}
                            aria-sort={
                                isActive
                                    ? sortConfig.direction === 'asc'
                                        ? 'ascending'
                                        : 'descending'
                                    : undefined
                            }
                        >
                            {col.label}
                            {col.sortable && (
                                <span className={`ml-1 ${isActive ? 'text-indigo-600' : 'text-slate-300'}`}>
                                    {arrow || ' ⇅'}
                                </span>
                            )}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
