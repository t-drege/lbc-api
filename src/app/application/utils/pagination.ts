export const pagination = (page, size) => {
    page = --page
    const limit = size ? (+size) : 3;
    let offset = page ? page * limit : 0;
    return {limit, offset};
};

export const pagingData = (data, page, limit) => {
    const {count: totalItems, rows: rows} = data;
    const currentPage = page ? +page : 0;
    const totalPages = (Math.ceil(totalItems / limit));

    return {rows, totalPages, currentPage, totalItems};
};