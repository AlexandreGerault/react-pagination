import React from 'react'
import ButtonSeparator from './ButtonSeparator'
import PaginationButton from './PaginationButton'

const Pagination = ({page, prevPage, nextPage, goToPage, last}) => {
  const pages = {}
  if (last < 8) {
    pages.left = last
    pages.middle = 0
    pages.right = 0
  } else if (page <= 3) {
    pages.left = 4
    pages.middle = 0
    pages.right = 3
  } else if (page >= 3 && page <= last - 3) {
    pages.left = 1
    pages.middle = 3
    pages.right = 1
  } else {
    pages.left = 3
    pages.middle = 0
    pages.right = 4
  }
  const left = [...Array(pages.left).fill(null)].map((_, i) => (
    <PaginationButton
      key={i + 1}
      onClick={() => goToPage(i + 1)}
      disabled={i + 1 === page}
    >
      {i + 1}
    </PaginationButton>
  ))
  const middle = [...Array(pages.middle).fill(null)].map((_, i) => (
    <PaginationButton
      key={i + page - 1}
      onClick={() => goToPage(i + page - 1)}
      disabled={i + page - 1 === page}
    >
      {i + page - 1}
    </PaginationButton>
  ))
  const right = [...Array(pages.right).fill(null)]
    .map((_, i) => (
      <PaginationButton
        key={last - i}
        onClick={() => goToPage(last - i)}
        disabled={last - i === page}
      >
        {last - i}
      </PaginationButton>
    ))
    .reverse()

  return (
    <nav
      className="relative z-0 inline-flex shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <PaginationButton onClick={() => prevPage()} rounded="left">
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
      {left}
      {middle.length > 0 || right.length > 0 ? <ButtonSeparator /> : ''}
      {middle.length > 0 && middle}
      {middle.length > 0 && <ButtonSeparator />}
      {right}
      <PaginationButton onClick={() => nextPage()} rounded="right">
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
