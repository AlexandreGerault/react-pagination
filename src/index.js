import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import DataTable from './components/DataTable/DataTable'
import './tailwind.output.css'

// http://127.0.0.1:8000/api/user
function App() {
  return (
    <DataTable
      endpoint="http://127.0.0.1:8000/api/user"
      perPage={3}
      columns={[
        {label: 'Prénom', name: 'firstname'},
        {label: 'Nom', name: 'lastname'},
        {label: 'Adresse mail', name: 'email'},
        {label: 'Rôle', name: 'role'},
      ]}
    />
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
