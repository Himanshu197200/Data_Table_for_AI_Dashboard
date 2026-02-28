export function getNestedValue(obj, key) {
    return key.split('.').reduce((o, k) => o?.[k], obj);
}


export function filterByName(data, query) {
    if (!data) return [];
    if (!query || query.trim() === '') return data;
    const lowerQuery = query.toLowerCase().trim();
    return data.filter((user) => user.name?.toLowerCase().includes(lowerQuery));
}
