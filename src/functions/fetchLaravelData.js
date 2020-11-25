const fetchLaravelData = async (endpoint, page, perPage) => {
  const res = await fetch(`${endpoint}?page=${page}&perPage=${perPage}`)
  const {data, meta} = await res.json()

  return {
    data,
    meta: {
      currentPage: meta.current_page,
      lastPage: meta.last_page,
      from: meta.from,
      to: meta.to,
    },
  }
}

export {fetchLaravelData}
