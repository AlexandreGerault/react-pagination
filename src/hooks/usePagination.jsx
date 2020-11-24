import React, {useState} from 'react'

const usePagination = ({initialPage = 1, maxPages} = {}) => {
  const [page, setPage] = useState(initialPage)

  const prevPage = () => {
    page - 1 > 1 ? setPage(page - 1) : setPage(page)
  }

  const nextPage = () => {
    page + 1 < maxPages ? setPage(page + 1) : setPage(page)
  }

  const goTo = i => {
    i >= 1 && i <= maxPages ? setPage(i) : setPage(page)
  }

  return [page, prevPage, nextPage, goTo]
}

export default usePagination
