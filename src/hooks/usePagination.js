import { useState, useMemo, useCallback } from 'react';


export default function usePagination(data, pageSize = 5) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.max(1, Math.ceil((data?.length || 0) / pageSize));

    const paginatedData = useMemo(() => {
        if (!data) return [];
        const start = (currentPage - 1) * pageSize;
        return data.slice(start, start + pageSize);
    }, [data, currentPage, pageSize]);

    const goNext = useCallback(() => {
        setCurrentPage((p) => Math.min(p + 1, totalPages));
    }, [totalPages]);

    const goPrev = useCallback(() => {
        setCurrentPage((p) => Math.max(p - 1, 1));
    }, []);

    const resetPage = useCallback(() => {
        setCurrentPage(1);
    }, []);

    return { currentPage, totalPages, paginatedData, goNext, goPrev, resetPage };
}
