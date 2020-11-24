import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from './components/Pagination'
import usePagination from './hooks/usePagination'
import './tailwind.output.css'

function App() {
  const maxPages = 10
  const [page, prevPage, nextPage, goToPage] = usePagination({
    initialPage: 1,
    maxPages: maxPages,
  })

  return (
    <>
      <p>This is page {page}</p>
      <Pagination
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        goToPage={goToPage}
        last={maxPages}
      />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
