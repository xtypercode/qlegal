import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const range = (start: number, end: number) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <div className="my-4 flex justify-center">
            <nav className="flex" aria-label="Pagination">
                <ul className="flex list-none">
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="mr-2 rounded-md bg-gray-200 px-3 py-1 focus:outline-none disabled:opacity-50"
                        >
                            Previous
                        </button>
                    </li>
                    {range(1, totalPages).map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={`mx-1 rounded-md px-3 py-1 ${
                                    currentPage === page
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-800"
                                } hover:bg-blue-600 focus:outline-none`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="ml-2 rounded-md bg-gray-200 px-3 py-1 focus:outline-none disabled:opacity-50"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
