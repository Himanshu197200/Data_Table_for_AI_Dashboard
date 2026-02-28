import { useState, useMemo } from 'react';


export default function useSort(data) {
    const [sortConfig, setSortConfig] = useState({ field: 'name', direction: 'asc' });

    const handleSort = (field) => {
        setSortConfig((prev) => ({
            field,
            direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const sortedData = useMemo(() => {
        if (!data || data.length === 0) return [];
        const { field, direction } = sortConfig;
        return [...data].sort((a, b) => {
            
            const resolve = (obj, key) => key.split('.').reduce((o, k) => o?.[k], obj);
            const valA = resolve(a, field) ?? '';
            const valB = resolve(b, field) ?? '';
            const cmp = String(valA).localeCompare(String(valB));
            return direction === 'asc' ? cmp : -cmp;
        });
    }, [data, sortConfig]);

    return { sortConfig, handleSort, sortedData };
}
