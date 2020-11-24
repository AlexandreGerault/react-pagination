const PaginationButton = ({onClick, children, className, disabled}) => {
  const disabledClassName = disabled ? 'cursor-not-allowed' : ''
  return (
    <button
      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
        className ? className : ''
      } ${disabledClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default PaginationButton
