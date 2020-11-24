const PaginationButton = ({onClick, children, className, disabled}) => {
  const disabledClassName = disabled
    ? 'bg-indigo-700 text-white cursor-not-allowed border-indigo-700 '
    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 '
  return (
    <button
      className={`relative inline-flex items-center px-4 py-2 border bg-white text-sm font-medium ${disabledClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default PaginationButton
