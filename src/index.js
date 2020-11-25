import ReactDOM from 'react-dom'
import DataTable from './components/DataTable/DataTable'
import {fetchLaravelData} from './functions/fetchLaravelData'
import './tailwind.output.css'

// http://127.0.0.1:8000/api/user
function App() {
  return (
    <DataTable
      fetcher={fetchLaravelData}
      endpoint="http://127.0.0.1:8000/api/user" // Use a fetcher function to make it more abstract and flexible
      perPage={5}
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
