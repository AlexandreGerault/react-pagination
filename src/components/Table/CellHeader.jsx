const CellHeader = ({children}) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {children}
    </th>
  )
}

export default CellHeader
