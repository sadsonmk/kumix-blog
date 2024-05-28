import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const MyPagination = ({blogsPerPage, totalBlogs, currentPage, paginate}) => {

    const pageNumbers = []
    for (let number = 1; number <= Math.ceil(totalBlogs / blogsPerPage); number++) {
        pageNumbers.push(
            <Pagination.Item key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
            >
              {number}
            </Pagination.Item>,
      );
    }

    return (
        <div>
        <Pagination>{pageNumbers}</Pagination>
        </div>
      );

}

export default MyPagination