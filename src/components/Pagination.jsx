import React from 'react'
import PaginationButton from './PaginationButton'

const Pagination = ({page, prevPage, nextPage, goToPage, last}) => {
  const pages = [...Array(last).fill(null)].map((current, index) => {
    const disabled = page === index + 1
    return (
      <PaginationButton
        key={index + 1}
        onClick={() => goToPage(index + 1)}
        disabled={disabled}
      >
        {index + 1}
      </PaginationButton>
    )
  })

  return (
    <nav
      className="relative z-0 inline-flex shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <PaginationButton onClick={() => prevPage()}>
        <span className="sr-only">Previous</span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </PaginationButton>
      {pages}
      <PaginationButton onClick={() => nextPage()}>
        <span className="sr-only">Next</span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </PaginationButton>
    </nav>
  )
}

export default Pagination
