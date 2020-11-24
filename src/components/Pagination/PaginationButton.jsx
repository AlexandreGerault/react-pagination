const PaginationButton = ({onClick, children, disabled, rounded}) => {
  const disabledClassName = disabled
    ? 'bg-indigo-700 text-white cursor-not-allowed border-indigo-700 '
    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 '
  const roundClass =
    rounded === 'left'
      ? 'rounded-l-md '
      : rounded === 'right'
      ? 'rounded-r-md'
      : ''
  return (
    <button
      className={`relative inline-flex items-center px-4 py-2 border bg-white text-sm font-medium ${disabledClassName} ${roundClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default PaginationButton
