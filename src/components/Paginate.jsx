/** @format */

import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function Paginate({ setCurrentPage, currentPage, PostsPerPage, data }) {
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	console.log(Math.ceil(data.length / PostsPerPage));
	return (
		<div className="d-flex">
			{data.length > PostsPerPage && (
				<Pagination className="ms-auto pe-3">
					<PaginationItem disabled={currentPage === 1}>
						<PaginationLink first onClick={() => paginate(1)} />
					</PaginationItem>
					<PaginationItem disabled={currentPage === 1}>
						<PaginationLink
							previous
							onClick={() => paginate(currentPage - 1)}
						/>
					</PaginationItem>
					<PaginationItem active={currentPage === 1}>
						<PaginationLink onClick={() => paginate(1)}>1</PaginationLink>
					</PaginationItem>
					<PaginationItem active={currentPage === 2}>
						<PaginationLink onClick={() => paginate(2)}>2</PaginationLink>
					</PaginationItem>
					<PaginationItem
						disabled={currentPage === Math.ceil(data.length / PostsPerPage)}
					>
						<PaginationLink next onClick={() => paginate(currentPage + 1)} />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink
							last
							onClick={() => paginate(Math.ceil(data.length / PostsPerPage))}
						/>
					</PaginationItem>
				</Pagination>
			)}
			{/* <Pagination className="ms-auto pe-3">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              className="active"
              onClick={() => handlePaginate(currentPage - 1)}
            >
              Prev
            </PaginationLink>
          </PaginationItem>
        )}
        {pageNumbers.slice(0, 5).map((number) => (
          <PaginationItem key={number} active={number === currentPage}>
            <PaginationLink onClick={() => handlePaginate(number)}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage > 3 && (
          <PaginationItem disabled>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        )}
        {pageNumbers.slice(-5).map((number) => (
          <PaginationItem key={number} active={number === currentPage}>
            <PaginationLink onClick={() => handlePaginate(number)}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < pageNumbers.length && (
          <PaginationItem>
            <PaginationLink
              className="active"
              onClick={() => handlePaginate(currentPage + 1)}
            >
              Next
            </PaginationLink>
          </PaginationItem>
        )}
      </Pagination> */}
		</div>
	);
}
export default Paginate;
