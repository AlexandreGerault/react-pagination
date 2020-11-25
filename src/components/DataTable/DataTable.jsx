import {useEffect, useState} from 'react'
import usePagination from '../../hooks/usePagination'
import Table from '../Table/Table'
import TableBody from '../Table/TableBody'
import TableHeader from '../Table/TableHeader'
import CellHeader from '../Table/CellHeader'
import TableCell from '../Table/TableCell'
import Pagination from '../Pagination/Pagination'

const DataTable = ({columns, endpoint, perPage, fetcher}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [meta, setMeta] = useState({})
  const [page, prevPage, nextPage, goToPage] = usePagination({
    maxPages: meta.lastPage,
  })
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false)
      const {data, meta} = await fetcher(endpoint, page, perPage)
      setData(data)
      setMeta(meta)
      setIsLoaded(true)
    }
    fetchData()
  }, [page, endpoint, perPage, fetcher])

  return (
    <div className="p-16">
      {isLoaded ? (
        <Table
          footer={
            <div className="flex justify-between p-4 border-t items-center">
              <div className="flex flex-col">
                <p>
                  Résultats {meta.from} à {meta.to}
                </p>
                <p>Total : {meta.total} résultat </p>
              </div>
              <Pagination
                page={page}
                prevPage={prevPage}
                nextPage={nextPage}
                goToPage={goToPage}
                last={meta.lastPage}
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
                  <TableCell key={item[column.name]}>
                    {item[column.name]}
                  </TableCell>
                ))}
              </tr>
            ))}
          </TableBody>
        </Table>
      ) : (
        <button type="button" className="bg-rose-600 ..." disabled>
          <svg version="1.0" width="64px" height="64px" viewBox="0 0 128 128">
            <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
            <g>
              <path
                d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
                fill="#000000"
                fillOpacity="1"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 64 64"
                to="360 64 64"
                dur="1800ms"
                repeatCount="indefinite"
              ></animateTransform>
            </g>
          </svg>
          Processing
        </button>
      )}
    </div>
  )
}

export default DataTable
