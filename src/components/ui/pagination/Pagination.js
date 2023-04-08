import React from 'react';

const Pagination = ({currentPage = 1, allPage, onChangePage}) => {
    const pages = []
    for (let i = 1; i < allPage; i++) {
        pages.push(i)
    }

    function changePrevPage() {
        onChangePage(currentPage - 1)
    }

    function changeNextPage() {
        onChangePage(currentPage + 1)
    }

    function selectPage(page) {
        onChangePage(page + 1)
    }

    console.log(pages)

    return (
        <div>
            <center>
                <button className=" mt-10 p-2  bg-blue-600 rounded-md text-white disabled:[#4556C4]"
                        disabled={currentPage <= 1}
                        onClick={changePrevPage}
                >
                    prev page
                </button>
                {pages.map((page, index) => (
                    <button className="py-2 px-3 border-1 bg-blue-600 rounded-md text-black"
                            style={{
                                background: index + 1 === currentPage ? "blue" : "none",
                                color: index + 1 === currentPage ? "white" : "black",
                            }}
                            onClick={() => selectPage(index)}
                    >
                        {page}
                    </button>
                ))}
                <button className="p-2  bg-blue-600 rounded-md text-white disabled:[#4556C4] disabled:cursor-no-drop"
                        onClick={changeNextPage}
                        disabled={currentPage === allPage - 1}
                >
                    Next page
                </button>
            </center>
        </div>
    );
};
export default Pagination;