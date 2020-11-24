import React from 'react'
import ReactDOM from 'react-dom'
import Pagination from './components/Pagination'
import './tailwind.output.css'

function App() {
  return <Pagination last={10} />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
