import { getNestedValue } from '../../utils/filterUtils';

export default function TableRow({ row, columns }) {
    return (
        <tr className="border-b border-slate-100 transition-colors hover:bg-indigo-50/40">
            {columns.map((col) => (
                <td key={col.key} className="whitespace-nowrap px-5 py-3.5 text-sm text-slate-700">
                    {getNestedValue(row, col.key) ?? '—'}
                </td>
            ))}
        </tr>
    );
}
