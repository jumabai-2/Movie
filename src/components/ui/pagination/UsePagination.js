export const DOTS = "...";

function isMobile() {
    return false;
}
export function usePagination({
                                  itemsCount, pageSize, siblingsCount = isMobile() ? 1 : 3, currentPage,
                              })
{
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = [];
    const isMobileWidth = isMobile();

    let firstSiblingPage;
    siblingsCount = Math.min(siblingsCount, pagesCount);

    if (pagesCount <= siblingsCount) {
        firstSiblingPage = 1;
    } else if (currentPage === 1) {
        firstSiblingPage = currentPage;
    } else if (currentPage === pagesCount) {
        firstSiblingPage = currentPage - 2;
    } else {
        firstSiblingPage = currentPage - 1;
    }

    if (firstSiblingPage > 1 && !isMobileWidth) {
        pages.push(1);
    }

    if (firstSiblingPage > 2 && !isMobileWidth) {
        pages.push("...");
    }

    // The next page after the last sibling.
    const nextToLastSiblingPage = firstSiblingPage + siblingsCount;

    if (!isMobileWidth) {
        for (; firstSiblingPage < nextToLastSiblingPage; ++firstSiblingPage) {
            pages.push(firstSiblingPage);
        }
    } else {
        pages.push(currentPage);
    }

    if (firstSiblingPage < pagesCount) {
        pages.push("...");
    }

    if (firstSiblingPage < pagesCount + 1) {
        pages.push(pagesCount);
    }

    return pages;
}