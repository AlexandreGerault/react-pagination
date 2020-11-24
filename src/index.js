import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from './components/Pagination'
import usePagination from './hooks/usePagination'
import './tailwind.output.css'

function App() {
  const [page, prevPage, nextPage, goToPage, last] = usePagination({
    initialPage: 1,
    maxPages: 10,
  })

  return (
    <>
      <p>This is page {page}</p>
      <Pagination
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        goToPage={goToPage}
        last={last}
      />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
