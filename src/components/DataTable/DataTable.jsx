import {useEffect, useState} from 'react'
import usePagination from '../../hooks/usePagination'
import Table from '../Table/Table'
import TableBody from '../Table/TableBody'
import TableHeader from '../Table/TableHeader'
import CellHeader from '../Table/CellHeader'
import TableCell from '../Table/TableCell'
import Pagination from '../Pagination/Pagination'

const DataTable = ({columns, endpoint, perPage}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [lastPage, setLastPage] = useState(0)
  const [page, prevPage, nextPage, goToPage] = usePagination({
    initialPage: 1,
    maxPages: lastPage,
  })
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${endpoint}?page=${page}&perPage=${perPage}`)
      const json = await res.json()
      console.log(json)
      setData(json.data)
      setLastPage(json.meta.last_page)
      setIsLoaded(true)
    }
    fetchData()
  }, [page, endpoint, perPage])

  return (
    <div className="p-16">
      {isLoaded ? (
        <Table
          footer={
            <div className="flex justify-between p-4 border-t items-center">
              <p>This is page {page}</p>
              <Pagination
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                goToPage={goToPage}
                last={lastPage}
              />
            </div>
          }
        >
          <TableHeader>
            {columns.map((column, index) => (
              <CellHeader key={column.label}>{column.label}</CellHeader>
            ))}
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <tr key={index}>
                {columns.map((column, index) => (
                  <TableCell>{item[column.name]}</TableCell>
                ))}
              </tr>
            ))}
          </TableBody>
        </Table>
      ) : (
        'Chargement... '
      )}
    </div>
  )
}

export default DataTable
